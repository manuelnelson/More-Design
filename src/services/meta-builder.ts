import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
declare var window: any;

@Injectable()
export class MetaBuilderService {
    constructor() {}
    BuildMeta(meta: Meta, item: any){
      const siteTag = " | More Design";
      meta.updateTag({
        property: "og:url",
        name: "url",
        content: window.location.href
      })
      meta.updateTag({
        property: "og:site_name",
        content: "More Design"
      })

      if(item.title){
        meta.updateTag({
          name: "title",
          content: item.title + siteTag
        })
        meta.updateTag({
          property: "og:title",
          name: "title",
          content: item.title + siteTag
        })
        meta.updateTag({
          name: "twitter:title",
          content: item.title
        })
      }
      let keywords = item.keywords ? item.keywords : 'MORE design build, architecture, interior design, dallas, texas, modern, classic';
      meta.updateTag({
        name: "keywords",
        content: keywords
      });
      
      if(item.metaDescription){
        meta.updateTag({
          name: "description",
          content: item.metaDescription
        })
        meta.updateTag({
          name: "og:description",
          content: item.metaDescription
        })
      }
      if(item.thumbnailImage && item.thumbnailImage.url){
        meta.updateTag({
          property: "og:image",
          name: "image",
          content: item.thumbnailImage.url
        })
        meta.updateTag({
          property: "og:image",
          name: "image",
          content: item.thumbnailImage.url
        })
        meta.updateTag({
          property: "og:image",
          name: "image",
          content: item.thumbnailImage.url
        })  
        meta.updateTag({
          name: "twitter:image",
          content: item.thumbnailImage.url
        })
      }
      meta.updateTag({
        name: "twitter:card",
        content: "summary"
      })
      return meta;
    }
}
