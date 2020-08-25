export const GET_MENUS_QUERY = `
query getMenus($parent_id: Int_comparison_exp = {_eq: 10}, $tenant_code: String!) {
  swp_menu(where: {tenant_code: {_eq: $tenant_code}, level: {_eq: 0}}) {
    name
    children(order_by: {position: asc}){
      label
      uri
      swp_route {
        staticprefix
      }
    }
  }
}
`;

export const GET_ARTICLE_QUERY = `
query getArticle($articleId: Int) {
  article: swp_article(where: {id: {_eq: $articleId}}) {
    body
    comments_count
    extra
    lead
    paywall_secured
    published_at
    slug
    title
    locale
    swp_route {
      name
      staticprefix
    }
    swp_article_authors {
      swp_author {
        name
        role
        avatar_url
      }
    }
    swp_article_feature_media {
      description
      renditions: swp_image_renditions {
        name
        width
        height
        image: swp_image {
          asset_id
          file_extension
          variants

        }
      }
    }
    swp_slideshows {
      swp_slideshow_items {
        position
        swp_article_media {
          description
          swp_image_renditions {
            name
            width
            height
            swp_image {
              asset_id
              variants
              file_extension
            }
          }
        }
      }
    }
    swp_article_seo_metadata {
      meta_description
      meta_title
      og_description
      og_title
      twitter_description
      twitter_title
      seo_media {
        swp_image {
          asset_id
          file_extension
        }
      }
      seo_og_media {
        swp_image {
          asset_id
          file_extension
        }
      }
      seo_twitter_media {
        image_id
        swp_image {
          asset_id
          file_extension
        }
      }
    }
  }
}
`;

export const GET_AUTHOR_QUERY = `
query getAuthor($slug: String = "") {
  author: swp_author(where: {slug: {_eq: $slug}}) {
    author_media_id
    avatar_url
    biography
    facebook
    instagram
    name
    twitter
    role
  }
}
`;

export const GET_COLLECTION_QUERY = `
  query getArticles($tenant_code: String = "", $routeId: Int, $limit: Int = 10, $offset: Int = 10) {
    metadata: swp_article_aggregate(where: {tenant_code: {_eq: $tenant_code}, route_id: {_eq: $routeId}}) {
      aggregate {
        totalCount: count
      }
    }
    items: swp_article(limit: $limit, offset: $offset, order_by: {published_at: desc}, where: {tenant_code: {_eq: $tenant_code}, route_id: {_eq: $routeId}}) {
      comments_count
      lead
      paywall_secured
      published_at
      slug
      title
      swp_article_authors {
        swp_author {
          name
          role
          avatar_url
        }
      }
      swp_article_feature_media {
        renditions: swp_image_renditions {
          name
          width
          height
          image: swp_image {
            asset_id
            file_extension
            variants

          }
        }
      }
      swp_route {
        staticprefix
      }
    }
  }
`;

export const GET_CONTENTLISTITEMS_QUERY = `
  query getArticles($listName: String = "", $limit: Int = 1000, $tenant_code: String= "") {
    list: swp_content_list(where: {name: {_ilike: $listName}, tenant_code: {_eq: $tenant_code}}) {
      name
      items: swp_content_list_items(limit: $limit, order_by: {position: desc}) {
        article: swp_article {
          comments_count
          feature_media
          lead
          published_at
          title
          slug
          swp_route {
            staticprefix
          }
        }
      }
    }
  }
`;
