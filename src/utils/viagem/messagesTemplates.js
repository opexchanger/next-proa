import modal from "../../data/modal.preval";

const {
  successTitleWhatsapp,
  successTextWhatsapp,
  failTitleWhatsapp,
  failTextWhatsapp,
  successTitleEmail,
  successTextEmail,
  failTitleEmail,
  failTextEmail
} = modal;

export const mailSuccess = `
  <h2>${successTitleEmail}</h2>
  <p>${successTextEmail}</p>
`

export const mailFail = `
  <h2>${failTitleEmail}</h2>
  <p>${failTextEmail}</p>
`

export const whatsappSuccess = `
  <h2>${successTitleWhatsapp}</h2>
  <p>${successTextWhatsapp}</p>
`

export const whatsappFail = `
  <h2>${failTitleWhatsapp}</h2>
  <p>${failTextWhatsapp}</p>
`