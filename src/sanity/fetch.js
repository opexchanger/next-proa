import client, { getClient } from './client';

export const getAllCountries = async () => {
  const countries = await client.fetch(`
    *[ _type == "country" ] {
      "id": _id,
      title,
      description,
      isFeatured,
      coverImage
    }
  `);

  return countries;
};

export const getStatesInCountry = async (countryId) => {
  const states = await client.fetch(`
    *[ _type == "state" && country._ref == $countryId] {
      "id": _id,
      title,
      description,
      isFeatured,
      coverImage,
      "countryId": country->_id,
      "countryName": country->title,
    }
  `, {
    countryId
  });

  return states;
};

export const getCitiesInCountry = async (countryId) => {
  const cities = await client.fetch(`
    *[ _type == "city" && country._ref == $countryId] {
      "id": _id,
      title,
      description,
      isFeatured,
      coverImage,
      "stateId": state->_id,
      "stateName": state->title,
      "countryId": country->_id,
      "countryName": country->title,
    }
  `, {
    countryId
  });

  return cities;
};

export const getAllTravels = async () => {
  const travels = await client.fetch(`
    *[ _type == "travel" ] {
      "id": _id,
      title,
      "slug": slug.current,
      "categorySlug": category -> slug.current,
      coverImage,
      "cityId": city->_id,
      "cityName": city->title,
      "stateId": city->state->_id,
      "stateName": city->state->title,
      "countryId": city->country->_id,
      "countryName": city->country->title,

      "subRegionId": subRegion->_id,
      "regionId": subRegion -> region -> _id,
    }
  `);

  return travels;
};

export const getOneTravel = async (slug, preview) => {
  const query = `
    *[ _type == "travel" && slug.current == $slug] {
      _id,
      title,
      "slug": slug.current,
      type,
      coverImage,
      content,
      price,
      installments,
      hasDiscount,
      discount,
      tax,
      departureDate,
      returnDate,
      boardingPlace,
      hasAereo,
      hasBlock,
      hasGuide,
      hasChildFree,
      childFree,
      hasCortesy,
      cortesy,
      gallery,
      "cityId": city->_id,
      "cityName": city->title,
      "stateId": city->state->_id,
      "stateName": city->state->title,
      "countryId": city->country->_id,
      "countryName": city->country->title,
      
      "subRegionId": subRegion->_id,
      "subRegionName": subRegion->name,
      "regionId": subRegion -> region -> _id,
      "regionName": subRegion -> region -> name
    }
  `
  const travelResult = await getClient(preview).fetch(query, { slug });

  return { travelResult, query };
};

export const getCategories = async () => {
  const categories = await client.fetch(`
    *[ _type == "category" ] {
      "id": _id,
      title,
      description,
      "slug": slug.current
    }
  `);

  return categories;
};

export const getCustomRegions = async () => {
  const customRegions = await client.fetch(`
    *[_type=="customRegion"] {
      title,
      "slug": slug.current,
      description,
      filterBy,
      filterCondition,
      countryReference,
      'countrySelection': countrySelection[]->_id,
      'stateSelection': stateSelection[]->_id,
      'citySelection': citySelection[]->_id,
      isFeatured,
      showEmpty,
      coverImage,
      "categoryId": category->_id,
    }
  `);

  return customRegions;
}

export const getPagesGeral = async () => {
  const pagesGeral = await client.fetch(`
    *[ _type == "geral" ] {
      slogan,
      ctaButtonText,
      contactTitle,
      contactImage,
      contactText,
    }
  `);

  return pagesGeral;
};

export const getPageHome = async (preview) => {
  const query = `
    *[_type=="home-page"]{
      _id,
      tiles,
      presentationTitle,
      presentationSubtitle,
      mosaic,
      experiencesTitle,
      experiencesText,
      experiencesButtonText,
      aboutTitle,
      aboutText,
      aboutVideoUrl,
      destinationsTitle,
      destinationsText,
      destinationsButtonText,
      teamTitle,
      teamText,
      employees,
      testimonialsTitle,
      testimonialsText,
      testimonials,
      newsletterTitle,
      newsletterText,
      newsletterConfig,
    }
  `
  const pageHome = await getClient(preview).fetch(query);

  return { pageHome, query };
};

export const getCompanyInfo = async () => {
  const companyInfo = await client.fetch(`
    *[ _type == "companyInfo" ] {
      address,
      email,
      phones,
      whatsapp,
      instagram,
      facebook
    }
  `);

  return companyInfo;
};

export const getModal = async () => {
  const modal = await client.fetch(`
    *[_type == 'modal'] {
      title,
      subtitle,
      subjects,
      btnEmailText,
      btnWhatsappText,
      successTitleWhatsapp,
      successTextWhatsapp,
      failTitleWhatsapp,
      failTextWhatsapp,
      successTitleEmail,
      successTextEmail,
      failTitleEmail,
      failTextEmail
    }
  `);

  return modal;
};