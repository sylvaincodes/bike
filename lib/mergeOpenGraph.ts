import type { Metadata } from "next";

//Open graph sert à optimise le partage de la page sur les réseaux sociaux

const defaultOpenGraph: Metadata['openGraph'] = {
    title: 'Bike shop',
    description: 'Plateforme de vente de Bike en ligne',
    images:[
        {
            url:`${process.env.NEXT_PUBLIC_SERVER_URL}/og.jpg` 
        }
    ],
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}` 
}

export const mergeOpenGraph = (og?: Metadata['openGraph']) => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
        title: og?.title ? og.title : defaultOpenGraph.title,
        url: og?.url ? og.url : defaultOpenGraph.url,
    }
}