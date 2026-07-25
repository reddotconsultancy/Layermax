// Shared submit handler for the enquiry / custom / support forms.
// Posts directly to Web3Forms for simple, free email delivery.

const ENQUIRY_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = '19492cd3-6fe1-4967-969f-94985016397a';

const FORM_TYPES = {
  product: 'Product Enquiry',
  custom: 'Custom Furniture Request',
  support: 'Support Message'
};

// Reads a field's value by id; returns '' when the element is absent.
function fieldValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
window.fieldValue = fieldValue;

// Shows a non-blocking error above the submit button.
function showFormError(form, text) {
  let box = form.querySelector('.form-error-message');
  if (!box) {
    box = document.createElement('p');
    box.className = 'form-error-message';
    box.setAttribute('role', 'alert');
    form.appendChild(box);
  }
  box.textContent = text;
  box.style.display = 'block';
}

function clearFormError(form) {
  const box = form.querySelector('.form-error-message');
  if (box) box.style.display = 'none';
}

/**
 * Wires a form to the enquiry endpoint.
 * @param {object} opts
 * @param {string} opts.formId      form element id
 * @param {string} opts.btnId       submit button id
 * @param {string} opts.successId   success panel id
 * @param {string} opts.pendingText button label while in flight
 * @param {string} opts.idleHTML    button label to restore on failure
 * @param {() => object} opts.payload builds the JSON body
 */
window.initEnquiryForm = function initEnquiryForm(opts) {
  const form = document.getElementById(opts.formId);
  const submitBtn = document.getElementById(opts.btnId);
  const successContainer = document.getElementById(opts.successId);
  if (!form || !submitBtn || !successContainer) return;

  // Honeypot — hidden from users, filled by bots.
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'company';
  honeypot.id = `${opts.formId}-company`;
  honeypot.tabIndex = -1;
  honeypot.autocomplete = 'off';
  honeypot.setAttribute('aria-hidden', 'true');
  honeypot.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0;';
  form.appendChild(honeypot);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearFormError(form);

    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${opts.pendingText}`;
    submitBtn.disabled = true;

    try {
      const userPayload = opts.payload();
      const label = FORM_TYPES[userPayload.type] || 'Website Enquiry';
      const subject = userPayload.productName
        ? `${label}: ${userPayload.productName} — ${userPayload.name}`
        : (userPayload.subject || `${label} — ${userPayload.name}`);

      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: userPayload.name || 'Layermax Website',
          subject: subject,
          ...userPayload,
          company: honeypot.value
        })
      });
      const body = await res.json().catch(() => ({}));

      if (!res.ok || !body.success) {
        throw new Error(body.message || 'We could not send your message. Please try again, or call us on +91 78998 02412.');
      }

      form.style.display = 'none';
      successContainer.style.display = 'block';
    } catch (err) {
      showFormError(form, err.message || 'Something went wrong. Please call or WhatsApp us.');
      submitBtn.innerHTML = opts.idleHTML;
      submitBtn.disabled = false;
    }
  });
};

