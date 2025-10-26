import {type SchemaTypeDefinition} from 'sanity'
import {heroType} from "@/sanity/schemaTypes/blocks/heroType";
import {pageType} from "@/sanity/schemaTypes/pageType"
import {pageBuilderType} from "@/sanity/schemaTypes/pageBuilderType"
import {blockContentType} from "@/sanity/schemaTypes/blockContentType";
import {siteSettingsType} from "./siteSettingsType";


export const schema: { types: SchemaTypeDefinition[] } = {
    types: [heroType, pageType, pageBuilderType, blockContentType, siteSettingsType]
}
