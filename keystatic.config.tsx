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

import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: 'Blockchain Benin',
            mark: () => {
                return <img src="/logo.png" alt="Blockchain Benin Logo" height={24} />;
            },
        },
    },
    collections: {
        events: collection({
            label: 'Événements',
            slugField: 'title',
            path: 'src/content/events/*',
            format: { contentField: 'fullDescription' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                subtitle: fields.text({ label: 'Sous-titre' }),
                date: fields.date({ label: 'Date', validation: { isRequired: true } }),
                time: fields.text({ label: 'Heure (ex: 11:00 GMT+1)' }),
                location: fields.text({ label: 'Lieu (Ville, Pays)' }),
                venue: fields.text({ label: 'Salle / Endroit précis' }),
                address: fields.text({ label: 'Adresse complète' }),
                mapEmbedUrl: fields.text({ label: 'URL d\'intégration Google Maps (src de l\'iframe)', description: 'Copiez le lien dans le "src" du code d\'intégration Google Maps' }),
                description: fields.text({ label: 'Description courte', multiline: true }),
                fullDescription: fields.document({
                    label: 'Description complète',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
                participants: fields.text({ label: 'Participants (ex: 50+)' }),
                type: fields.select({
                    label: 'Type d\'événement',
                    options: [
                        { label: 'Meetup', value: 'Meetup' },
                        { label: 'Conférence', value: 'Conférence' },
                        { label: 'Hackathon', value: 'Hackathon' },
                        { label: 'Formation', value: 'Formation' },
                        { label: 'Charité', value: 'Charité' },
                    ],
                    defaultValue: 'Meetup',
                }),
                color: fields.select({
                    label: 'Couleur',
                    options: [
                        { label: 'Primary (Bleu)', value: 'primary' },
                        { label: 'Secondary (Vert)', value: 'secondary' },
                        { label: 'Accent (Or)', value: 'accent' },
                    ],
                    defaultValue: 'primary',
                }),
                price: fields.text({ label: 'Prix (ex: Gratuit, 5000 FCFA)' }),
                registrationLink: fields.url({ label: 'Lien d\'inscription', validation: { isRequired: false } }),
                image: fields.image({
                    label: 'Image de l\'événement',
                    directory: 'public/images/events',
                    publicPath: '/images/events/',
                }),
                featured: fields.checkbox({ label: 'Mettre en avant', defaultValue: false }),
                agenda: fields.array(
                    fields.object({
                        time: fields.text({ label: 'Heure' }),
                        title: fields.text({ label: 'Titre de la session' }),
                    }),
                    {
                        label: 'Programme',
                        itemLabel: props => `${props.fields.time.value} - ${props.fields.title.value}`,
                    }
                ),
                speakers: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Nom' }),
                        role: fields.text({ label: 'Rôle' }),
                    }),
                    {
                        label: 'Intervenants',
                        itemLabel: props => props.fields.name.value,
                    }
                ),
            },
        }),
        partners: collection({
            label: 'Partenaires',
            slugField: 'name',
            path: 'src/content/partners/*',
            schema: {
                name: fields.slug({ name: { label: 'Nom' } }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'public/images/partners',
                    publicPath: '/images/partners/',
                    validation: { isRequired: true },
                }),
            },
        }),
        gallery: collection({
            label: 'Galerie',
            slugField: 'title',
            path: 'src/content/gallery/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                category: fields.text({ label: 'Catégorie' }),
                image: fields.image({
                    label: 'Image',
                    directory: 'public/images/gallery',
                    publicPath: '/images/gallery/',
                    validation: { isRequired: true },
                }),
                size: fields.select({
                    label: 'Taille',
                    options: [
                        { label: 'Normal (1x1)', value: 'normal' },
                        { label: 'Large (2x2)', value: 'large' },
                        { label: 'Wide (2x1)', value: 'wide' },
                        { label: 'Tall (1x2)', value: 'tall' },
                        { label: 'Small (1x1)', value: 'small' },
                    ],
                    defaultValue: 'normal',
                }),
            },
        }),
        programs: collection({
            label: 'Programmes',
            slugField: 'title',
            path: 'src/content/programs/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                stats: fields.text({ label: 'Statistiques (ex: 300+ apprenants)' }),
                action: fields.text({ label: 'Texte Bouton (ex: Découvrir)' }),
                icon: fields.select({
                    label: 'Icône',
                    options: [
                        { label: 'GraduationCap', value: 'GraduationCap' },
                        { label: 'Users', value: 'Users' },
                        { label: 'Code', value: 'Code' },
                        { label: 'Trophy', value: 'Trophy' },
                    ],
                    defaultValue: 'GraduationCap',
                }),
                size: fields.select({
                    label: 'Taille',
                    options: [
                        { label: 'Large', value: 'large' },
                        { label: 'Small', value: 'small' },
                    ],
                    defaultValue: 'small',
                }),
                gradient: fields.select({
                    label: 'Couleur',
                    options: [
                        { label: 'Primary (Bleu)', value: 'primary' },
                        { label: 'Secondary (Vert)', value: 'secondary' },
                        { label: 'Accent (Or)', value: 'accent' },
                    ],
                    defaultValue: 'primary',
                }),
            },
        }),
    },
    singletons: {
        stats: singleton({
            label: 'Statistiques',
            path: 'src/content/stats/data',
            schema: {
                members: fields.text({ label: 'Membres Actifs (ex: 2000)' }),
                events: fields.text({ label: 'Événements (ex: 50)' }),
                trained: fields.text({ label: 'Personnes Formées (ex: 1500)' }),
                partners: fields.text({ label: 'Partenaires (ex: 30)' }),
            },
        }),
    },
});
