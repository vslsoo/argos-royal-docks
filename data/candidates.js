/* Candidate sites for a new Argos point in Royal Docks. Checked 2026-11-10.
   Coordinates: postcodes.io (postcode centroid) or the listing itself; never placed by eye.
   area_sqft / rent_pa_gbp: number when a single value, string when a range or not applicable. */
window.CANDIDATES=[
 {id:"C1",name:"Sainsbury's Local Royal Wharf",address:"11 Royal Crest Avenue, London",postcode:"E16 2PG",
  lat:51.500935,lon:0.029981,coord_quality:"postcode centroid",format:"Collection point",
  area_sqft:"part of store",rent_pa_gbp:null,status:"Store trading; CP terms to be confirmed",checked_on:"2026-11-10",
  sainsburys:true,note:"",
  sources:["https://www.localopeningtimes.co.uk/sainsburys/sainsbury-s-newham-royal-wharf-local-london-newham-opening-hours.html",
           "https://foodhygieneratings.org.uk/sainsburys-unit-g-silvertown"]},
 {id:"C2",name:"Sainsbury's Local Canning Town",address:"23 Silvertown Way, London",postcode:"E16 1DH",
  lat:51.512349,lon:0.010039,coord_quality:"postcode centroid",format:"Collection point",
  area_sqft:"part of store",rent_pa_gbp:null,status:"Store trading; CP terms to be confirmed",checked_on:"2026-11-10",
  sainsburys:true,note:"",
  sources:["https://www.foodhygieneratings.org.uk/sainsburys-local-e16-1dh"]},
 {id:"C3",rent_approx:true,name:"Riverscape, Royal Wharf",address:"49 Royal Crest Avenue / Riverscape Walk, London",postcode:"E16 (full postcode not in listing)",
  lat:51.500423,lon:0.028388,coord_quality:"postcode centroid (E16 2TD, Royal Crest Ave)",format:"Small standalone",
  area_sqft:1833,rent_pa_gbp:42100,rent_note:"£3,512 pcm",status:"Available",checked_on:"2026-11-10",
  note:"Two listings (1,833 and 1,832 sq ft), probably the same unit. Exact postcode to confirm with the agent (JBrown International).",
  sources:["https://www.rightmove.co.uk/properties/93391935","https://www.rightmove.co.uk/properties/168539735"]},
 {id:"C4",name:"Hallsville Quarter, Unit B02",address:"B02 Hallsville Quarter, Canning Town, London",postcode:"E16 1YE",
  lat:51.514788,lon:0.009959,coord_quality:"postcode centroid",format:"Small standalone",
  area_sqft:2451,rent_pa_gbp:75000,rent_note:"Class E, with extraction",status:"Available",checked_on:"2026-11-10",
  note:"Next to Pret and Starbucks; Lidl and Morrisons nearby.",
  sources:["https://search.savills.com/gb/en/property-detail/gb1134l427427"]}
];

/* Shared caveat for C1 and C2 (inside Sainsbury's Local) */
window.SAINSBURYS_CAVEAT={
 badge:"Terms to be confirmed",
 text:"Argos is being sold to Swift Partners (completion February 2027, full separation by February 2029). Long-term commercial agreements cover Argos stores and collection points inside Sainsbury's, but their terms are not public. To confirm: can a <i>new</i> CP open in a Sainsbury's Local, for how long and at what fee? Fallback: small standalone.",
 short:"Argos is being sold to Swift Partners (completes Feb 2027). Whether a <i>new</i> collection point can open in a Sainsbury's Local, and on what terms, is not public. Fallback: a small standalone.",
 sources:["https://corporate.sainsburys.co.uk/news/press-releases/sainsbury-s-agrees-sale-of-argos-to-swift-partners/",
          "https://www.legalcheek.com/lc-journal-posts/argos-changes-hands-the-commercial-and-legal-story-behind-the-sale/",
          "https://live.euronext.com/it/node/12902246"]
};

window.CANDIDATE_ALTERNATIVES=[
 {id:"A1",name:"Hallsville Quarter, Phase 4 Unit 1",address:"Hallsville Quarter, Canning Town, London",postcode:"E16 1QT",
  lat:51.516289,lon:0.016813,coord_quality:"postcode centroid",format:"Small standalone",
  area_sqft:3104,rent_pa_gbp:75000,status:"Available",checked_on:"2026-11-10",note:"",
  sources:["https://search.savills.com/gb/en/property-detail/gb1134l212987"]},
 {id:"A2",rent_approx:true,name:"Royal Crest Avenue (Riverscape)",address:"Royal Crest Avenue, Royal Wharf, London",postcode:"E16",
  lat:51.500423,lon:0.028388,coord_quality:"approx. (plotted at C3)",format:"Small standalone",
  area_sqft:1495,rent_pa_gbp:34400,status:"Available",checked_on:"2026-11-10",note:"Rent approximate (from pcm).",
  sources:["https://www.rightmove.co.uk/properties/93392247"]},
 {id:"A3",rent_approx:true,name:"230 North Woolwich Road (Royal Wharf)",address:"230 North Woolwich Road, London",postcode:"E16",
  lat:51.500423,lon:0.028388,coord_quality:"approx. (plotted at C3)",format:"Small standalone",
  area_sqft:2470,rent_pa_gbp:59300,status:"Available",checked_on:"2026-11-10",note:"Rent approximate (from pcm).",
  sources:["https://www.rightmove.co.uk/properties/93391812"]},
 {id:"A4",rent_approx:true,name:"Fairwater House (Royal Wharf)",address:"Fairwater House, Royal Wharf, London",postcode:"E16",
  lat:51.500423,lon:0.028388,coord_quality:"approx. (plotted at C3)",format:"Small standalone",
  area_sqft:2723,rent_pa_gbp:66700,status:"Available",checked_on:"2026-11-10",note:"Rent approximate (from pcm).",
  sources:["https://www.rightmove.co.uk/properties/93391608"]},
 {id:"A5",name:"Royal Wharf, 8 units",address:"Royal Wharf, London",postcode:"E16 2SB",
  lat:51.501544,lon:0.031723,coord_quality:"listing",format:"Small standalone",
  area_sqft:"1,625–3,336",rent_pa_gbp:"from ≈ 36,600",status:"Available",checked_on:"2026-11-10",note:"8 units.",
  sources:["https://www.rightmove.co.uk/properties/760571484612288"]},
 {id:"A6",name:"Silvertown Quays, Plot 6, Units A–D",address:"Silvertown Quays, Plot 6, London",postcode:"E16 2TH",
  lat:51.501915,lon:0.030558,coord_quality:"postcode centroid",format:"Small standalone",
  area_sqft:"1,002–2,206",rent_pa_gbp:"≈ £30 / sq ft",status:"Listed",checked_on:"2026-11-10",note:"4 units (A–D).",
  sources:["https://search.savills.com/gb/en/property-detail/gb1134l272236"]},
 {id:"A7",name:"London City Island",address:"London City Island, London",postcode:"E14 0SY",
  lat:51.513468,lon:0.006672,coord_quality:"postcode centroid",format:"Small standalone",
  area_sqft:"1,292–2,505",rent_pa_gbp:"≈ 31,000–60,100",status:"Available",checked_on:"2026-11-10",
  note:"4 units. Tower Hamlets 034: outside the 2 study MSOAs but inside the 15-minute walk zone.",
  sources:["https://www.rightmove.co.uk/properties/93392328","https://www.rightmove.co.uk/properties/93392223",
           "https://www.rightmove.co.uk/properties/171371954","https://www.rightmove.co.uk/properties/93391695"]}
];
