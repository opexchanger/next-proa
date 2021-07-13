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
      "subRegionId": subRegion->_id,
      "regionId": subRegion -> region -> _id,
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
