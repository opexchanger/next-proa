import client, { getClient } from './client';

export const getSubRegions = async () => {
  const subRegions = await client.fetch(`
    *[ _type == "subRegion" ]{
      "id": _id,
      name,
      description,
      coverImage,
      isFeatured,
      "regionId": region->_id,
      "travelsCount": count(*[ _type == "travel" && references(^._id) ])
    } [ travelsCount > 0 ]
  `);

  return subRegions;
};

export const getRegions = async () => {
  const regions = await client.fetch(`
    *[ _type == "region" ]{
      "id": _id,
      name,
      description,
      coverImage,
      isFeatured,
  		"travelsCount": count(*[ _type == "travel" && references(^._id) ])
    }[ travelsCount > 0 ]
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

export const getOneTravel = async (slug) => {
  const travel = await client.fetch(
    `
      *[ _type == "travel" && slug.current == $slug] {
        title,
        "slug": slug.current,
        type,
        coverImage,
        content,
        price,
        installments,
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
    `,
    { slug }
  );

  return travel;
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
      "team": *[_type=='team']{
        teamTitle,
        teamText,
        employees
      },
      "testimonials": *[_type=='testimonials']{
        testimonialsTitle,
        testimonialsText,
        testimonials
      },
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