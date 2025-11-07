import {defineQuery} from "next-sanity";

const pageQuery: string = `
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    content[]{
      ...,
      _type == "reference" => @->{
        _type,
        title,
        ...
      }
    }
  }
`;
export const PAGE_QUERY = defineQuery(pageQuery);

const landingPageQuery: string = `
*[_type == "siteSettings"][0]{
  homePage->{
    mainImage,
    content[]{
      ...
    }
  }
}
`;

export const LANDING_PAGE_QUERY = defineQuery(landingPageQuery);

