import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
declare var window: any;

@Injectable()
export class MetaBuilderService {
    constructor() {}
    BuildMeta(meta: Meta, item: any){
      const siteTag = " | More Design";
      meta.addTag({
        property: "og:url",
        name: "url",
        content: window.location.href
      })
      meta.addTag({
        property: "og:site_name",
        content: "More Design"
      })

      if(item.title){
        meta.addTag({
          name: "title",
          content: item.title + siteTag
        })
        meta.addTag({
          property: "og:title",
          name: "title",
          content: item.title + siteTag
        })
        meta.addTag({
          name: "twitter:title",
          content: item.title
        })
      }
      if(item.metaDescription){
        meta.addTag({
          name: "description",
          content: item.metaDescription
        })
        meta.addTag({
          name: "og:description",
          content: item.metaDescription
        })
      }
      meta.addTag({
        property: "og:image",
        name: "image",
        content: item.thumbnailImage.url
      })
      meta.addTag({
        property: "og:image",
        name: "image",
        content: item.thumbnailImage.url
      })
      meta.addTag({
        property: "og:image",
        name: "image",
        content: item.thumbnailImage.url
      })
      meta.addTag({
        name: "twitter:card",
        content: "summary"
      })
      meta.addTag({
        name: "twitter:image",
        content: item.thumbnailImage.url
      })
      return meta;
    }
}
