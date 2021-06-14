import client from './client';

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
      coverImage,
      "regionId": region->_id,
      "subRegionId": subRegion->_id,
    }
  `);

  return travels;
};

export const getOneTravel = async (slug) => {
  const travel = await client.fetch(
    `
      *[ _type == "travel" && slug.current == $slug] {
        title,
        "slug": slug.current,
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
        "regionId": region->_id,
        "regionName": region->name,
        "subRegionId": subRegion->_id,
        "subRegionName": subRegion->name,
      }
    `,
    { slug }
  );

  return travel;
};
