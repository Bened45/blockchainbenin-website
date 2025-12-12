import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID &&
        process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
        ? {
            kind: 'github',
            repo: {
                owner: 'Bened45',
                name: 'blockchain-benin',
            },
        }
        : {
            kind: 'local',
        },

    collections: {
        // Collection pour les événements
        events: collection({
            label: 'Événements',
            slugField: 'title',
            path: 'content/events/*',
            format: { contentField: 'description' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                date: fields.date({
                    label: 'Date',
                    validation: { isRequired: true },
                }),
                subtitle: fields.text({
                    label: 'Sous-titre',
                    validation: { length: { min: 1, max: 200 } },
                }),
                description: fields.document({
                    label: 'Description',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
                image: fields.image({
                    label: 'Image',
                    directory: 'public/images/events',
                    publicPath: '/images/events/',
                }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Conférence', value: 'conference' },
                        { label: 'Hackathon', value: 'hackathon' },
                        { label: 'Formation', value: 'formation' },
                        { label: 'Meetup', value: 'meetup' },
                        { label: 'Atelier', value: 'atelier' },
                    ],
                    defaultValue: 'meetup',
                }),
                action: fields.text({
                    label: 'Texte du bouton',
                    defaultValue: "S'inscrire",
                }),
                location: fields.text({
                    label: 'Lieu',
                }),
                registrationLink: fields.url({
                    label: "Lien d'inscription (optionnel)",
                }),
            },
        }),

        // Collection pour la galerie
        gallery: collection({
            label: 'Galerie',
            slugField: 'title',
            path: 'content/gallery/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                category: fields.text({
                    label: 'Catégorie',
                    validation: { length: { min: 1 } },
                }),
                image: fields.image({
                    label: 'Image',
                    directory: 'public/images/gallery',
                    publicPath: '/images/gallery/',
                }),
                size: fields.select({
                    label: 'Taille',
                    options: [
                        { label: 'Petit', value: 'small' },
                        { label: 'Large', value: 'large' },
                        { label: 'Haut', value: 'tall' },
                        { label: 'Large horizontal', value: 'wide' },
                    ],
                    defaultValue: 'small',
                }),
                date: fields.date({
                    label: 'Date de la photo',
                }),
            },
        }),

        // Collection pour les produits/goodies du club
        products: collection({
            label: 'Produits / Goodies',
            slugField: 'name',
            path: 'content/products/*',
            format: { contentField: 'description' },
            schema: {
                name: fields.slug({ name: { label: 'Nom du produit' } }),
                price: fields.number({
                    label: 'Prix (FCFA)',
                    validation: { isRequired: true, min: 0 },
                }),
                image: fields.image({
                    label: 'Image du produit',
                    directory: 'public/images/products',
                    publicPath: '/images/products/',
                }),
                description: fields.document({
                    label: 'Description',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Vêtements', value: 'clothing' },
                        { label: 'Accessoires', value: 'accessories' },
                        { label: 'Papeterie', value: 'stationery' },
                        { label: 'Autre', value: 'other' },
                    ],
                    defaultValue: 'clothing',
                }),
                sizes: fields.array(
                    fields.text({ label: 'Taille' }),
                    {
                        label: 'Tailles disponibles',
                        itemLabel: (props) => props.value,
                    }
                ),
                colors: fields.array(
                    fields.text({ label: 'Couleur' }),
                    {
                        label: 'Couleurs disponibles',
                        itemLabel: (props) => props.value,
                    }
                ),
                stock: fields.number({
                    label: 'Stock disponible',
                    defaultValue: 0,
                }),
                featured: fields.checkbox({
                    label: 'Produit en vedette',
                    defaultValue: false,
                }),
                available: fields.checkbox({
                    label: 'Disponible à la vente',
                    defaultValue: true,
                }),
            },
        }),

        // Collection pour les partenaires
        partners: collection({
            label: 'Partenaires',
            slugField: 'name',
            path: 'content/partners/*',
            schema: {
                name: fields.slug({ name: { label: 'Nom du partenaire' } }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'public/Partenaires',
                    publicPath: '/Partenaires/',
                }),
                website: fields.url({
                    label: 'Site web (optionnel)',
                }),
                description: fields.text({
                    label: 'Description (optionnelle)',
                    multiline: true,
                }),
                order: fields.number({
                    label: 'Ordre d\'affichage',
                    defaultValue: 0,
                }),
            },
        }),
    },
});
