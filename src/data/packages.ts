export interface Package {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  price: number;
  duration: number;
  category: 'adventure' | 'cultural' | 'spiritual' | 'beach' | 'mountain';
  image: string;
  gallery: string[];
  highlights: string[];
  highlightsHi: string[];
  itinerary: {
    day: number;
    title: string;
    titleHi: string;
    description: string;
    descriptionHi: string;
  }[];
  included: string[];
  includedHi: string[];
  excluded: string[];
  excludedHi: string[];
}

export const packages: Package[] = [
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Paradise',
    titleHi: 'कश्मीर स्वर्ग',
    description: 'Experience the breathtaking beauty of Kashmir with snow-capped mountains, pristine lakes, and Mughal gardens',
    descriptionHi: 'बर्फ से ढके पहाड़ों, प्राचीन झीलों और मुगल उद्यानों के साथ कश्मीर की लुभावनी सुंदरता का अनुभव करें',
    price: 45000,
    duration: 7,
    category: 'mountain',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
    ],
    highlights: [
      'Dal Lake Shikara Ride',
      'Gulmarg Gondola Experience',
      'Mughal Gardens Tour',
      'Pahalgam Valley Visit',
      'Authentic Kashmiri Cuisine'
    ],
    highlightsHi: [
      'डल झील शिकारा सवारी',
      'गुलमर्ग गोंडोला अनुभव',
      'मुगल गार्डन टूर',
      'पहलगाम घाटी यात्रा',
      'प्रामाणिक कश्मीरी व्यंजन'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        titleHi: 'श्रीनगर में आगमन',
        description: 'Arrive at Srinagar airport, transfer to houseboat, evening Shikara ride on Dal Lake',
        descriptionHi: 'श्रीनगर हवाई अड्डे पर पहुंचें, हाउसबोट में स्थानांतरण, डल झील पर शाम की शिकारा सवारी'
      },
      {
        day: 2,
        title: 'Srinagar Sightseeing',
        titleHi: 'श्रीनगर दर्शनीय स्थल',
        description: 'Visit Mughal Gardens - Nishat Bagh, Shalimar Bagh, and Chashme Shahi',
        descriptionHi: 'मुगल गार्डन की यात्रा - निशात बाग, शालीमार बाग, और चश्मे शाही'
      },
      {
        day: 3,
        title: 'Gulmarg Excursion',
        titleHi: 'गुलमर्ग भ्रमण',
        description: 'Full day trip to Gulmarg, Gondola ride, meadow walks',
        descriptionHi: 'गुलमर्ग की पूरे दिन की यात्रा, गोंडोला सवारी, घास के मैदान में सैर'
      }
    ],
    included: [
      'Accommodation in hotels/houseboats',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Shikara ride on Dal Lake',
      'Professional tour guide'
    ],
    includedHi: [
      'होटल/हाउसबोट में आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'डल झील पर शिकारा सवारी',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch',
      'Personal expenses',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन',
      'व्यक्तिगत खर्चे',
      'यात्रा बीमा'
    ]
  },
  {
    id: 'rajasthan-royal',
    title: 'Royal Rajasthan Heritage',
    titleHi: 'राजस्थान शाही विरासत',
    description: 'Discover the royal heritage of Rajasthan with magnificent forts, palaces, and desert landscapes',
    descriptionHi: 'शानदार किलों, महलों और रेगिस्तानी परिदृश्य के साथ राजस्थान की शाही विरासत की खोज करें',
    price: 38000,
    duration: 8,
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245'
    ],
    highlights: [
      'Amber Fort, Jaipur',
      'City Palace and Hawa Mahal',
      'Mehrangarh Fort, Jodhpur',
      'Camel Safari in Thar Desert',
      'Traditional Rajasthani Dinner'
    ],
    highlightsHi: [
      'आमेर किला, जयपुर',
      'सिटी पैलेस और हवा महल',
      'मेहरानगढ़ किला, जोधपुर',
      'थार रेगिस्तान में ऊंट सफारी',
      'पारंपरिक राजस्थानी रात्रिभोज'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        titleHi: 'जयपुर में आगमन',
        description: 'Welcome to the Pink City, transfer to hotel, evening free for leisure',
        descriptionHi: 'गुलाबी शहर में स्वागत है, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      }
    ],
    included: [
      'Heritage hotel accommodation',
      'Daily breakfast',
      'All entrance fees',
      'Desert safari with cultural program',
      'Expert local guides'
    ],
    includedHi: [
      'विरासत होटल आवास',
      'दैनिक नाश्ता',
      'सभी प्रवेश शुल्क',
      'सांस्कृतिक कार्यक्रम के साथ रेगिस्तान सफारी',
      'विशेषज्ञ स्थानीय गाइड'
    ],
    excluded: [
      'Airfare',
      'Lunch and dinner',
      'Tips and gratuities',
      'Optional activities'
    ],
    excludedHi: [
      'हवाई किराया',
      'दोपहर का भोजन और रात का खाना',
      'टिप्स और ग्रेच्युटी',
      'वैकल्पिक गतिविधियाँ'
    ]
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Bliss',
    titleHi: 'केरल बैकवाटर आनंद',
    description: 'Cruise through serene backwaters, explore lush tea plantations, and relax on pristine beaches',
    descriptionHi: 'शांत बैकवाटर के माध्यम से यात्रा करें, हरे चाय बागानों का अन्वेषण करें, और प्राचीन समुद्र तटों पर आराम करें',
    price: 35000,
    duration: 6,
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'
    ],
    highlights: [
      'Houseboat stay in Alleppey',
      'Munnar tea estate visit',
      'Kathakali dance performance',
      'Kovalam beach relaxation',
      'Ayurvedic spa treatment'
    ],
    highlightsHi: [
      'अल्लेप्पी में हाउसबोट प्रवास',
      'मुन्नार चाय बागान यात्रा',
      'कथकली नृत्य प्रदर्शन',
      'कोवलम बीच विश्राम',
      'आयुर्वेदिक स्पा उपचार'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi',
        titleHi: 'कोच्चि में आगमन',
        description: 'Airport pickup, check-in to hotel, evening visit to Fort Kochi',
        descriptionHi: 'हवाई अड्डे से पिकअप, होटल में चेक-इन, शाम को फोर्ट कोच्चि की यात्रा'
      }
    ],
    included: [
      'Deluxe houseboat accommodation',
      'All meals on houseboat',
      'Tea plantation tour',
      'Ayurvedic massage session',
      'Airport transfers'
    ],
    includedHi: [
      'डीलक्स हाउसबोट आवास',
      'हाउसबोट पर सभी भोजन',
      'चाय बागान टूर',
      'आयुर्वेदिक मालिश सत्र',
      'हवाई अड्डा स्थानांतरण'
    ],
    excluded: [
      'Flight tickets',
      'Alcoholic beverages',
      'Personal shopping',
      'Adventure activities'
    ],
    excludedHi: [
      'हवाई टिकट',
      'मादक पेय',
      'व्यक्तिगत खरीदारी',
      'साहसिक गतिविधियाँ'
    ]
  },
  {
    id: 'spiritual-varanasi',
    title: 'Spiritual Varanasi & Ganga',
    titleHi: 'आध्यात्मिक वाराणसी और गंगा',
    description: 'Experience the spiritual heart of India with ancient temples, Ganga Aarti, and sacred rituals',
    descriptionHi: 'प्राचीन मंदिरों, गंगा आरती, और पवित्र अनुष्ठानों के साथ भारत के आध्यात्मिक हृदय का अनुभव करें',
    price: 25000,
    duration: 5,
    category: 'spiritual',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc'
    ],
    highlights: [
      'Sunrise boat ride on Ganges',
      'Evening Ganga Aarti ceremony',
      'Visit Kashi Vishwanath Temple',
      'Sarnath Buddhist pilgrimage',
      'Yoga and meditation session'
    ],
    highlightsHi: [
      'गंगा पर सूर्योदय नाव की सवारी',
      'शाम की गंगा आरती समारोह',
      'काशी विश्वनाथ मंदिर की यात्रा',
      'सारनाथ बौद्ध तीर्थयात्रा',
      'योग और ध्यान सत्र'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi',
        titleHi: 'वाराणसी में आगमन',
        description: 'Transfer to hotel, evening Ganga Aarti at Dashashwamedh Ghat',
        descriptionHi: 'होटल में स्थानांतरण, दशाश्वमेध घाट पर शाम की गंगा आरती'
      }
    ],
    included: [
      'Hotel near ghats',
      'Daily breakfast',
      'Boat rides on Ganges',
      'Temple visits with guide',
      'Yoga session'
    ],
    includedHi: [
      'घाट के पास होटल',
      'दैनिक नाश्ता',
      'गंगा पर नाव की सवारी',
      'गाइड के साथ मंदिर यात्रा',
      'योग सत्र'
    ],
    excluded: [
      'Transportation to Varanasi',
      'Lunch and dinner',
      'Puja offerings',
      'Shopping'
    ],
    excludedHi: [
      'वाराणसी के लिए परिवहन',
      'दोपहर का भोजन और रात का खाना',
      'पूजा की पेशकश',
      'खरीदारी'
    ]
  },
  {
    id: 'himalayan-adventure',
    title: 'Himalayan Adventure Trek',
    titleHi: 'हिमालयन साहसिक ट्रेक',
    description: 'Challenge yourself with thrilling mountain treks, experience local Himalayan culture',
    descriptionHi: 'रोमांचक पर्वत ट्रेक के साथ खुद को चुनौती दें, स्थानीय हिमालयी संस्कृति का अनुभव करें',
    price: 42000,
    duration: 10,
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
    ],
    highlights: [
      'Moderate to challenging treks',
      'Mountain village homestays',
      'Sunrise views from peaks',
      'Local cuisine experience',
      'Professional trekking guides'
    ],
    highlightsHi: [
      'मध्यम से चुनौतीपूर्ण ट्रेक',
      'पर्वत गांव होमस्टे',
      'चोटियों से सूर्योदय के दृश्य',
      'स्थानीय व्यंजन अनुभव',
      'पेशेवर ट्रेकिंग गाइड'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Base Camp Arrival',
        titleHi: 'बेस कैंप आगमन',
        description: 'Drive to base camp, acclimatization, gear check',
        descriptionHi: 'बेस कैंप की ड्राइव, अनुकूलन, गियर जाँच'
      }
    ],
    included: [
      'Trekking permits',
      'All meals during trek',
      'Camping equipment',
      'Experienced guides and porters',
      'First aid and emergency support'
    ],
    includedHi: [
      'ट्रेकिंग परमिट',
      'ट्रेक के दौरान सभी भोजन',
      'कैंपिंग उपकरण',
      'अनुभवी गाइड और कुली',
      'प्राथमिक चिकित्सा और आपातकालीन सहायता'
    ],
    excluded: [
      'Personal trekking gear',
      'Travel insurance',
      'Tips for staff',
      'Extra snacks and beverages'
    ],
    excludedHi: [
      'व्यक्तिगत ट्रेकिंग गियर',
      'यात्रा बीमा',
      'स्टाफ के लिए टिप्स',
      'अतिरिक्त स्नैक्स और पेय पदार्थ'
    ]
  },
  {
    id: 'goa-beaches',
    title: 'Goa Beach Paradise',
    titleHi: 'गोवा बीच पैराडाइज',
    description: 'Sun, sand, and sea - experience the vibrant beach life of Goa with water sports and nightlife',
    descriptionHi: 'सूरज, रेत और समुद्र - जल खेल और रात्रि जीवन के साथ गोवा के जीवंत समुद्र तट जीवन का अनुभव करें',
    price: 28000,
    duration: 5,
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2'
    ],
    highlights: [
      'Beach hopping - Baga, Calangute, Anjuna',
      'Water sports - parasailing, jet ski',
      'Old Goa heritage tour',
      'Sunset cruise on Mandovi River',
      'Beach shacks and nightlife'
    ],
    highlightsHi: [
      'बीच होपिंग - बागा, कलंगुट, अंजुना',
      'जल खेल - पैरासेलिंग, जेट स्की',
      'पुरानी गोवा विरासत टूर',
      'मांडवी नदी पर सूर्यास्त क्रूज',
      'बीच झोपड़ियाँ और रात्रि जीवन'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Goa',
        titleHi: 'गोवा में आगमन',
        description: 'Airport transfer, beach resort check-in, evening beach walk',
        descriptionHi: 'हवाई अड्डा स्थानांतरण, बीच रिसॉर्ट चेक-इन, शाम की समुद्र तट सैर'
      }
    ],
    included: [
      'Beachfront resort stay',
      'Daily breakfast',
      'Water sports package',
      'River cruise',
      'Scooter rental for 2 days'
    ],
    includedHi: [
      'समुद्र तट रिसॉर्ट प्रवास',
      'दैनिक नाश्ता',
      'जल खेल पैकेज',
      'नदी क्रूज',
      '2 दिनों के लिए स्कूटर किराया'
    ],
    excluded: [
      'Airfare',
      'Lunch and dinner',
      'Club entry fees',
      'Additional water sports'
    ],
    excludedHi: [
      'हवाई किराया',
      'दोपहर का भोजन और रात का खाना',
      'क्लब प्रवेश शुल्क',
      'अतिरिक्त जल खेल'
    ]
  }
];
