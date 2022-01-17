import client, { getClient } from './client';

// export const getSubRegions = async () => {
//   const subRegions = await client.fetch(`
//     *[ _type == "subRegion" ]{
//       "id": _id,
//       name,
//       description,
//       coverImage,
//       isFeatured,
//       "regionId": region->_id,
//       "travelsCount": count(*[ _type == "travel" && references(^._id) ])
//     } [ travelsCount > 0 ]
//   `);

//   return subRegions;
// };

export const getRegions = async () => {
  const regions = await client.fetch(`
    *[_type=="commercialRegion"] {
      title,
      slug,
      description,
      category,
      groupBy,
      groupCondition,
      countrySelection,
      stateSelection,
      citySelection,
      isFeatured,
      coverImage
    }
  `);

  return regions;
};

export const getAllTravels = async () => {
  const travels = await client.fetch(`
    *[ _type == "travel" ] {
      "id": _id,
      title,
      "slug": slug.current,
      "categorySlug": category -> slug.current,
      coverImage,
      "subRegionId": subRegion->_id,
      "regionId": subRegion -> region -> _id,
    }
  `);

  return travels;
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

export const getCustomRegion = async () => {
  const customRegions = await client.fetch(`
    *[_type=="commercialRegion"] {
      name,
      slug,
      description,
      category,
      groupBy,
      groupCondition,
      countrySelection,
      stateSelection,
      citySelection,
      isFeatured,
      coverImage
    }
  `);

  return customRegions;
}

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
      "subRegionId": subRegion->_id,
      "subRegionName": subRegion->name,
      "regionId": subRegion -> region -> _id,
      "regionName": subRegion -> region -> name
    }
  `
  const travelResult = await getClient(preview).fetch(query, { slug });

  return { travelResult, query };
};

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
      testimonials
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