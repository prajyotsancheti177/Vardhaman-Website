import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEO = ({
  title = "Vardhaman Paper Products - Barcode Labels, Thermal Paper Rolls & BOPP Tape Manufacturer in Aurangabad",
  description = "Leading manufacturer & supplier of barcode paper rolls, thermal paper rolls (Hansol paper), BOPP tape, barcode label printing & copier paper (B2B, NR, Reflection) in MIDC Waluj, Aurangabad, Maharashtra. 20+ years of excellence.",
  keywords = "barcode paper roll Aurangabad, thermal paper roll Maharashtra, BOPP tape supplier, barcode label printing Aurangabad, copier paper B2B, Hansol thermal paper, paper products MIDC Waluj",
  canonicalUrl = "https://vardhamanpaperproducts.com/",
  ogImage = "https://vardhamanpaperproducts.com/og-image.jpg",
  schemaData,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
