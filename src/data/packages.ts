export type PackageType = 'domestic' | 'international' | 'honeymoon' | 'iv' | 'spiritualHeritage';

export interface Package {
  id: string;
  packageType: PackageType;
  location?: string;
  isSample?: boolean;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  price: number;
  duration: number;
  min:number;
  category: 'adventure' | 'cultural' | 'spiritual' | 'beach' | 'mountain' | 'nature';
  image: string;
  gallery: string[];
  videos: string[];
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

const currentPackages: Omit<Package, 'packageType'>[] = [
  {
    id: 'kashmir-paradise',
    title: 'kashmir paradise',
    titleHi: 'कश्मीर स्वर्ग',
    description: 'Experience the breathtaking beauty of Kashmir with snow-capped mountains, pristine lakes, and Mughal gardens',
    descriptionHi: 'बर्फ से ढके पहाड़ों, प्राचीन झीलों और मुगल उद्यानों के साथ कश्मीर की लुभावनी सुंदरता का अनुभव करें',
    price: 5500,
    duration: 5,
    min: 16,
    category: 'mountain',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    gallery: [
      '/images/kp1.jpg',
      '/images/kp2.jpg',
      '/images/kp3.jpg',
      
    ],
    videos: [
      '/videos/kp1.mp4'
    ],
    highlights: [
      'Dal Lake Shikara Ride',
      'Gulmarg Gondola Experience',
      'Gulmarg Snow Activities',
      'Pahalgam Valley Visit',
      'sonmarg Excursion'
    ],
    highlightsHi: [
      'डल झील शिकारा सवारी',
      'गुलमर्ग गोंडोला अनुभव',
      'गुलमर्ग बर्फ गतिविधियाँ',
      'पहलगाम घाटी यात्रा',
      'सोनमर्ग भ्रमण'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        titleHi: 'श्रीनगर में आगमन',
        description: 'Pick up from Srinagar Airport/Railway Station, Hotel check-in, If time permits Srinagar local market visit/night walk, Dinner at hotel, Overnight stay at hotel',
        descriptionHi: 'श्रीनगर हवाई अड्डे/रेलवे स्टेशन से पिकअप, होटल चेक-इन, यदि समय अनुमति देता है तो श्रीनगर स्थानीय बाजार यात्रा/रात की सैर, होटल में रात का खाना, होटल में रात भर ठहराव'
      },
      {
        day: 2,
        title: 'Gulmarg Sightseeing and activities',
        titleHi: 'गुलमर्ग दर्शनीय स्थल और गतिविधियाँ',
        description: 'Gulmarg valley, Gondola ride, ATV ride, Skiing/snow activities(seasonal), Pine forest, Scenic Mountain views, Dinner at hotel, Overnight stay at Srinagar hotel',
        descriptionHi: 'गुलमर्ग घाटी, गोंडोला सवारी, एटीवी सवारी, स्कीइंग/बर्फ गतिविधियाँ (मौसमी), पाइन जंगल, सुंदर पर्वत दृश्य, होटल में रात का खाना, श्रीनगर होटल में रात भर ठहराव'
      },
      {
        day: 3,
        title: 'Pahalgam Sightseeing and activities',
        titleHi: 'पहलगाम दर्शनीय स्थल और गतिविधियाँ',
        description: 'Apple valley, Aru valley, pony rides(optional), Lidder river, scenic valley views, Dinner at hotel, Overnight stay at Srinagar hotel',
        descriptionHi: 'एप्पल घाटी, अरू घाटी, पोनी सवारी (वैकल्पिक), लिडर नदी, सुंदर घाटी दृश्य, होटल में रात का खाना, श्रीनगर होटल में रात भर ठहराव'
      },
      {
        day: 4,
        title: 'Sonmarg Excursion',
        titleHi: 'सोनमर्ग भ्रमण',
        description: 'Sonmarg sightseeing, sonmarg valley, pony rides(optional), union vehicle if available, sind river, Snow covered mountain views, Dinner at hotel, Overnight stay at Srinagar hotel',
        descriptionHi: 'सोनमर्ग की पूरे दिन की यात्रा, गोंडोला सवारी, घास के मैदान में सैर'
      },
      {
        day: 5,
        title: 'Srinagar Local Sightseeing and Departure',
        titleHi: 'श्रीनगर स्थानीय दर्शनीय स्थल और प्रस्थान',
        description: 'Dal lake, Dal Lake Shikara Ride, Tulip Garden, Nishat Garden, Shalimar Garden, Hazratbal Shrine, Local handicraft & shopping market, Drop at Srinagar Airport/Railway Station',
        descriptionHi: 'डल झील, डल झील शिकारा सवारी, ट्यूलिप गार्डन, निशात गार्डन, शालीमार गार्डन, हज़रतबल श्राइन, स्थानीय हस्तशिल्प और शॉपिंग मार्केट, श्रीनगर हवाई अड्डे/रेलवे स्टेशन पर ड्रॉप'
      }
    ],
    included: [
      'Pickup and drop from Srinagar Airport/Railway Station',
      'Hotel accommodation in srinagar',
      '4 breakfast',
      '4 dinner',
      '4 Days sightseeing as per the itinerary',
      'Transportation for planned sightseeing and transfers',
      'Shikara ride(above 10 members)',
    ],
    includedHi: [
      'श्रीनगर हवाई अड्डे/रेलवे स्टेशन से पिकअप और ड्रॉप',
      'श्रीनगर में होटल की आवास',
      '4 नाश्ते',
      '4 रात का खाना',
      'यात्रा निर्देशिका के अनुसार 4 दिनों का दर्शनीय स्थल',
      'नियोजित दर्शनीय स्थलों और स्थानांतरण के लिए परिवहन',
      'शिकारा सवारी (10 से अधिक सदस्यों के लिए)'
    ],
    excluded: [
      'Shikara ride(below 10 members)',
      'Skiing/snow activities',
      'Local union vehicle charges whenever applicable',
      'Entry tickets',
      'Personal expenses',
      'Any services not mentioned in the inclusions'
    ],
    excludedHi: [
      'शिकारा सवारी (10 से कम सदस्यों के लिए)',
      'स्कीइंग/बर्फ गतिविधियाँ',
      'स्थानीय यूनियन वाहन कर',
      'प्रवेश टिकट',
      'व्यक्तिगत खर्चे',
      'यात्रा निर्देशिका में नहीं उल्लेखित कोई सेवाएँ'
    ]
  },

  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Bliss',
    titleHi: 'केरल बैकवाटर आनंद',
    description: 'Cruise through serene backwaters, explore lush tea plantations, and relax on pristine beaches',
    descriptionHi: 'शांत बैकवाटर के माध्यम से यात्रा करें, हरे चाय बागानों का अन्वेषण करें, और प्राचीन समुद्र तटों पर आराम करें',
    price: 4999,
    duration: 4,
    min: 4,
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    gallery: [
      '/images/kerala1.jpg',
      '/images/kerala2.jpg',
      '/images/kerala3.jpg'
    ],
    videos: [
      '/videos/kerala1.mp4'
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
      },
      {
        day: 2,
        title: 'Munnar Tea Estate Visit',
        titleHi: 'मुन्नार चाय बागान यात्रा',
        description: 'Explore the lush tea plantations of Munnar and enjoy scenic views',
        descriptionHi: 'मुन्नार के हरे-भरे चाय बागानों का अन्वेषण करें और सुंदर दृश्य का आनंद लें'
      },
      {
        day: 3,
        title: 'Houseboat Cruise in Alleppey',
        titleHi: 'अल्लेप्पी में हाउसबोट क्रूज',
        description: 'Board a traditional houseboat and cruise through the tranquil backwaters',
        descriptionHi: 'एक पारंपरिक हाउसबोट पर सवार हों और शांत बैकवाटर के माध्यम से क्रूज करें'
      },
      {
        day: 4,
        title: 'Kovalam Beach Relaxation',
        titleHi: 'कोवलम बीच विश्राम',
        description: 'Relax on the pristine beaches of Kovalam and enjoy water activities',
        descriptionHi: 'कोवलम के प्राचीन समुद्र तटों पर आराम करें और जल गतिविधियों का आनंद लें'
      },
      {
        day: 5,
        title: 'Ayurvedic Spa Treatment',
        titleHi: 'आयुर्वेदिक स्पा उपचार',
        description: 'Experience a rejuvenating Ayurvedic massage and spa session',
        descriptionHi: 'एक पुनरुत्थानकारी आयुर्वेदिक मालिश और स्पा सत्र का अनुभव करें'
      },

      {
        day: 6,
        title: 'Departure from Kochi',
        titleHi: 'कोच्चि से प्रस्थान',
        description: 'Check out from hotel and transfer to airport for departure',
        descriptionHi: 'होटल से चेक आउट करें और प्रस्थान के लिए हवाई अड्डे पर स्थानांतरण करें'
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
    id: 'Manali',
    title: 'Manali Heaven',
    titleHi: 'मणाली स्वर्ग',
    description: 'Experience the breathtaking beauty of Manali with snow-capped mountains, ancient lakes, and Mughal gardens',
    descriptionHi: 'बर्फ से ढके पहाड़ों, प्राचीन झीलों, और मुगल बागानों के साथ मणाली की सांस लेने वाली सुंदरता का अनुभव करें',
    price: 5500,
    duration: 5,
    min: 16,
    category: 'mountain',
    image: '/manali.jpg',
    gallery: [
      '/images/man1.jpg',
      '/images/man2.jpg',
      '/images/man3.jpg'
    ],
    videos: [
      '/videos/man1.mp4'
    ],
    highlights: [
      'Manali Sightseeing',
      'sissu village and waterfalls',
      'Snow activities',
      'Atal Tunnel experience',
      'Kullu valley and paragliding'
    ],
    highlightsHi: [
      'मणाली दर्शनीय स्थल',
      'सिस्सू गांव और झरने',
      'बर्फ गतिविधियाँ',
      'अटल सुरंग अनुभव',
      'कुल्लू घाटी और पैराग्लाइडिंग'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi and Transfer to Manali',
        titleHi: 'दिल्ली में आगमन और मणाली के लिए स्थानांतरण',
        description: 'Delhi to Manali , Transfer to hotel, Overnight stay at hotel',
        descriptionHi: 'दिल्ली से मणाली, होटल में स्थानांतरण, होटल में रात भर ठहराव'
      },
      {
        day: 2,
        title: 'Manali Sightseeing',
        titleHi: 'मणाली दर्शनीय स्थल',
        description: 'Pick up from volvo bus stand, Hotel check-in & Freshen up, Hadimba Devi Temple, Van Vihar, Tibetan Monastery, Mall Road, Manu Temple(If Time Allows), Overnight stay at Manali hotel',
        descriptionHi: 'वोल्वो बस स्टैंड से पिकअप, होटल चेक-इन और ताजगी, हडिम्बा देवी मंदिर, वन विहार, तिब्बती मठ, मॉल रोड, मनु मंदिर (यदि समय अनुमति देता है), मणाली होटल में रात भर ठहराव'
      },
      {
        day: 3,
        title: 'Sollang valley sightseeing',
        titleHi: 'सोलंग घाटी दर्शनीय स्थल',
        description: 'Solang valley, Snow Activities, Atal Tunnel, Sissu village, Sissu Waterfalls, Rohtang Pass is subject to permit availability and government regulations. If open it will be included as additional cost, Dinner at hotel, Overnight stay at Manali hotel',
        descriptionHi: 'सोलंग घाटी, बर्फ गतिविधियाँ, अटल सुरंग, सिस्सू गांव, सिस्सू झरने, रोहतांग पास अनुमति उपलब्धता और सरकारी नियमों के अधीन है। यदि खुला है तो इसे अतिरिक्त लागत के रूप में शामिल किया जाएगा, होटल में रात का खाना, मणाली होटल में रात भर ठहराव'
      },
      {
        day: 4,
        title: 'Kullu Nagar Sightseeing',
        titleHi: 'कुल्लू नगर दर्शनीय स्थल',
        description: 'Kullu valley view point, River Rafting Point, Paragliding Point, Kullu shawl Factory, Vaishno Devi Temple, Nagar Castle, Tripura sundari Temple, Overnight Volvo bus to Delhi',
        descriptionHi: 'कुल्लू घाटी व्यू पॉइंट, रिवर राफ्टिंग पॉइंट, पैराग्लाइडिंग पॉइंट, कुल्लू शॉल फैक्ट्री, वैष्णो देवी मंदिर, नगर किला, त्रिपुरा सुंदरी मंदिर, दिल्ली के लिए रात भर वोल्वो बस'
      },
      {
        day: 5,
        title: 'Departure from Manali',
        titleHi: 'मणाली से प्रस्थान',
        description: 'Reach Delhi in the morning, Tour ends with beautiful memories of Manali',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Hotel accommodation in Manali',
      'Pick up and drop from volvo bus stand',
      'Delhi to Manali and Manali to Delhi Volvo bus tickets',
      'Breakfast and Dinner',
      'All transfers and sightseeing',
    ],
    includedHi: [
      'मणाली में होटल आवास',
      'वोल्वो बस स्टैंड से पिकअप और ड्रॉप',
      'दिल्ली से मणाली और मणाली से दिल्ली वोल्वो बस टिकट',
      'नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance',
      'Entry fees to monuments and parks',
      'Any services not mentioned in the inclusions'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा',
      'मंदिरों और पार्कों के लिए प्रवेश शुल्क',
      'किसी भी सेवाओं का शुल्क जो सूचिबद्ध न हो'
    ]
  },


  {
    id: 'Munnar',
    title: 'Munnar Bliss',
    titleHi: 'मुनार आनंद',
    description: 'Explore the lush tea plantations, waterfalls, and wildlife of Munnar, the Scotland of India',
    descriptionHi: 'मुनार के हरे-भरे चाय बागानों, झरनों, और वन्यजीवों का अन्वेषण करें, जो भारत का स्कॉटलैंड है',
    price: 3800,
    duration: 3,
    min: 20,
    category: 'mountain',
    image: '/munnar.jpg',
    gallery: [
      '/images/mun1.jpg',
      '/images/mun2.jpg',
      '/images/mun3.jpg'
    ],
    videos: [
      '/videos/mun1.mp4'
    ],
    highlights: [
      'Visit tea plantations',
      'Waterfalls and nature walks',
      'Wildlife spotting',
      'Local Munnar cuisine tasting',
      'Kollukumalai Jeep Safari and Zip Line Adventure'
    ],
    highlightsHi: [
      'चाय बागानों की यात्रा',
      'झरनों और प्रकृति की सैर',
      'वन्यजीवों का अवलोकन',
      'स्थानीय मुनार व्यंजन चखना',
      'कोलुकुमलाई जीप सफारी और ज़िप लाइन एडवेंचर'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Local Sightseeing ',
        titleHi: 'स्थानीय दर्शनीय स्थल',
        description: 'Photo point, Mattupetty Dam, Echo Point, Pullu Medu Elephant view point, Kundala Dam & Lake, Top Station, Overnight stay at Munnar',
        descriptionHi: 'फोटो पॉइंट, मट्टुपेट्टी डैम, इको पॉइंट, पुल्लू मेड़ू हाथी दृश्य बिंदु, कुंडाला डैम और झील, टॉप स्टेशन, मुनार में रात भर ठहराव'
      },
      {
        day: 2,
        title: 'Adventures & Nature Walks',
        titleHi: 'साहसिक और प्रकृति की सैर',
        description: 'Kolukumalai Jeep Safari, Longest Zip Line, Periyakanal Waterfalls, Gap Road view point, Botanical Garden, Hydel Park, Overnight stay at Munnar',
        descriptionHi: 'कोलुकुमलाई जीप सफारी, सबसे लंबी ज़िप लाइन, पेरीयाकनाल झरने, गैप रोड व्यू पॉइंट, बोटैनिकल गार्डन, हाइडेल पार्क, मुनार में रात भर ठहराव'
      },
      {
        day: 3,
        title: 'Cultural & Scenic Spots',
        titleHi: 'सांस्कृतिक और सुंदर स्थल',
        description: 'Tea museum visit, Ripple waterfalls, Chunnayammakal Waterfalls, Hanging Bridge, Ponmudi Dam, Tour concludes with Departure from Munnar',
        descriptionHi: 'चाय संग्रहालय की यात्रा, रिपल झरने, चुनयम्माकल झरने, हैंगिंग ब्रिज, पोनमुडी डैम, मुनार से प्रस्थान के साथ यात्रा समाप्त होती है'
      },
    ],
    included: [
      'Deluxe hotel accommodation in Munnar',
      'Breakfast and Dinner',
      'Dindugul or Theni Pickup and drop',
      'Private Car/ Cab for Entire Trip',
      'Daily sightseeing as per itinerary',
      'Breakfast and Dinner ',
      'Driver Allowance, Toll, Parking, Fuel Charges',
      'All applicable taxes and service charges',
    ],
    includedHi: [
      'मुनार में डेलक्स होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'दिंदुगुल या तेनी से पिकअप और ड्रॉप',
      'निजी कार/कैब के लिए संपूर्ण यात्रा',
      'पेशेवर टूर गाइड',
      'दैनिक दर्शनीय स्थल',
      'नाश्ता और रात का खाना',
      'ड्राइवर की अनुमति, टॉल, पार्किंग, ईंधन शुल्क',
      'सभी लागू करने योग्य कर और सेवा शुल्क'
    ],
    excluded: [
      'Entrance fees to monuments and parks',
      'Adventure Activity Charges (Zip-line)',
      'Lunch and personal expenses',
      'Any services not mentioned in the inclusions',
    ],
    excludedHi: [
      'स्मारकों और पार्कों में प्रवेश शुल्क',
      'साहसिक गतिविधि शुल्क (ज़िप-लाइन)',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'कोई भी सेवाएं जो समावेश में उल्लेख नहीं की गई हैं'
    ]
  },
  {
    id: 'wayanad-nature',
    title: 'Wayanad Nature Escape',
    titleHi: 'वायनाड नेचर एस्केप',
    description: 'Discover the serene beauty of Wayanad with its lush forests, waterfalls, and wildlife sanctuaries',
    descriptionHi: 'वायनाड के हरे-भरे जंगलों, झरनों, और वन्यजीव अभयारण्यों की शांति का अनुभव करें',
    price: 3500,
    duration: 2,
    min: 4,
    category: 'adventure',
    image: '/wayanad.jpg',
    gallery: [
      '/images/wayanad1.jpg',
      '/images/wayanad2.jpg',
      '/images/wayanad3.jpg'
    ],
    videos: [
      '/videos/waya1.mp4'
    ],
    highlights: [
      'Visit tea plantations',
      'Waterfalls and nature walks',
      'Wildlife spotting',
      'Local Wayanad cuisine tasting',
      'Trekking in Western Ghats'
    ],
    highlightsHi: [
      'चाय बागानों की यात्रा',
      'झरनों और प्रकृति की सैर',
      'वन्यजीवों का अवलोकन',
      'स्थानीय वायनाड व्यंजन चखना',
      'पश्चिमी घाटों में ट्रेकिंग'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Wayanad',
        titleHi: 'वायनाड में आगमन',
        description: 'Transfer to hotel, evening nature walk',
        descriptionHi: 'होटल में स्थानांतरण, शाम को प्रकृति की सैर'
      },
      {
        day: 2,
        title: 'Wayanad Sightseeing',
        titleHi: 'वायनाड दर्शनीय स्थल',
        description: 'Visit tea plantations, waterfalls, and wildlife spots',
        descriptionHi: 'चाय बागानों, झरनों, और वन्यजीव स्थलों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Local Culture & Trekking',
        titleHi: 'स्थानीय संस्कृति और ट्रेकिंग',
        description: 'Experience local Wayanad cuisine and trek in the Western Ghats',
        descriptionHi: 'स्थानीय वायनाड व्यंजन का अनुभव करें और पश्चिमी घाटों में ट्रेकिंग करें'
      },
      {
        day: 4,
        title: 'Departure from Wayanad',
        titleHi: 'वायनाड से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      },
    ],
    included: [
      'Hotel accommodation in Wayanad',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Local cuisine tasting',
      'Professional tour guide'
    ],
    includedHi: [
      'वायनाड में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'स्थानीय व्यंजन चखना',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Coorg',
    title: 'Coorg Coffee & Nature',
    titleHi: 'कोर्ग कॉफी और प्रकृति',
    description: 'Experience the scenic beauty of Coorg with coffee plantations and lush greenery',
    descriptionHi: 'कॉफी बागानों और लग्ज़ ग्रीनरी के साथ कोर्ग की स्केनिक खुशबू का अनुभव करें',
    price: 4100,
    duration: 2,
    min: 12,
    category: 'nature',
    image: '/Coorg.jpg',
    gallery: [
      '/images/Coorg1.jpg',
      '/images/Coorg2.jpg',
      '/images/Coorg3.jpg'
    ],
    videos: [
      '/videos/trek1.mp4'
    ],
    highlights: [
      'Visit coffee plantations',
      'Waterfalls and nature walks',
      'Wildlife spotting',
      'Local Coorg cuisine tasting',
      'Trekking in Western Ghats'
    ],
    highlightsHi: [
      'कोफी बागानों की यात्रा',
      'जलपान और प्रकृति के चलना',
      'वन्यजीव देखना',
      'स्थानीय कोर्ग व्यंजन चखना',
      'पश्चिमी घाटों में ट्रेकिंग'
    ],
    itinerary: [
      {
        day: 1,
        title: 'coorg Arrival and Local Sightseeing',
        titleHi: 'कोर्ग आगमन और स्थानीय दर्शनीय स्थल',
        description: 'Golden Temple, Dubare Elephant camp, Harangi dam, Fish Lake, Nisarghana temple, Overnight stay at Coorg',
        descriptionHi: 'गोल्डन टेम्पल, डुबारे एलीफेंट कैंप, हरंगी डैम, फिश लेक, निसरघना मंदिर, कोर्ग में रात भर ठहराव'
      },
      {
        day: 2,
        title: 'Sightseeing and departure',
        titleHi: 'दर्शनीय स्थल और प्रस्थान',
        description: 'Mandalapatti View Point, Madikeri Fort, Omkareshwara Temple, Abbey Falls, Raja Seat, Drop at Mysore',
        descriptionHi: 'मंडलापट्टी व्यू पॉइंट, मडिकेरी किला, ओमकारेश्वर मंदिर, एबी फॉल्स, राजा सीट, मैसूर में ड्रॉप'
      }
      
    ],
    included: [
      'Mysore pickup and drop',
      '1 night hotel accommodation in Coorg',
      '2 breakfast and 1 dinner',
      'coorg local sightseeing as per itinerary',
      'Toll, parking, fuel charges and driver allowance',
      'Coorg Jeep Safari',
      'All applicable taxes and service charges'
    ],
    includedHi: [
      'मैसूर पिकअप और ड्रॉप',
      '1 रात का होटल आवास कोर्ग में',
      '2 नाश्ता और 1 रात का खाना',
      'कोर्ग स्थानीय दर्शनीय स्थल योजना के अनुसार',
      'टॉल, पार्किंग, ईंधन शुल्क और ड्राइवर की अनुमति',
      'कोर्ग जीप सैफारी',
      'सभी प्रयुक्त कर और सेवा शुल्क'
    ],
    excluded: [
      'Personal Expenses',
      'Services not mentioned in the inclusions',
      'Entry fees to monuments and parks',
      'Adventure Activity Charges'
    ],
    excludedHi: [
      'व्यक्तिगत खर्च',
      'इन्क्लूजन में नहीं उल्लिखित सेवाएं',
      'मंदिरों और पार्कों के लिए प्रवेश शुल्क',
      'एडवेंचर एक्टिविटी शुल्क'
    ]
  },
  {
    id: 'Goa',
    title: 'Goa Beach Paradise',
    titleHi: 'गोवा बीच पैराडाइज',
    description: 'Sun, sand, and sea - experience the vibrant beach life of Goa with water sports and nightlife',
    descriptionHi: 'सूरज, रेत और समुद्र - जल खेल और रात्रि जीवन के साथ गोवा के जीवंत समुद्र तट जीवन का अनुभव करें',
    price: 3200,
    duration: 3,
    min: 16,
    category: 'beach',
    image: '/goa.jpg',
    gallery: [
      '/images/goa1.jpg',
      '/images/goa2.jpg',
      '/images/goa3.jpg'
    ],
    videos: [
      '/videos/goa1.mp4'
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
        description: 'Pickup from airport/railway station, Hotel check-in, Fort Aguada, Sinquerim Beach, Candolim Beach, Calangute Beach, Baga Beach, Anjuna Beach, Vagator Beach, Chapora Fort (Dil Chahta Hai Fort), Overnight stay at Goa hotel',
        descriptionHi: 'हवाई अड्डे/रेलवे स्टेशन से पिकअप, होटल चेक-इन, फोर्ट अगुआड़ा, सिंक्वेरिम बीच, कैंडोलिम बीच, कलंगुट बीच, बागा बीच, अंजुना बीच, वागाटोर बीच, चपोरा फोर्ट (दिल चाहता है फोर्ट), गोवा होटल में रात भर ठहराव'
      },
      {
        day: 2,
        title: 'Goa Beach Activities',
        titleHi: 'गोवा बीच गतिविधियाँ',
        description: 'Breakfast at hotel, Dona Paula view point, Miramar Beach, Panjim city drive, Bascilica of Bom Jesus, Se Cathedral Church, Mangueshi Temple, Goa Boat Cruise(optional), Shopping at Panjim, Return to hotel, Overnight stay at Goa hotel',
        descriptionHi: 'होटल में नाश्ता, डोना पाउला व्यू पॉइंट, मिरामार बीच, पणजी शहर ड्राइव, बासिलिका ऑफ बॉम जीसस, सी कैथेड्रल चर्च, मंगेशी मंदिर, गोवा बोट क्रूज (वैकल्पिक), पणजी में खरीदारी, होटल लौटें, गोवा होटल में रात भर ठहराव'
      },
      {
        day: 3,
        title: 'Goa Adventure & Departure',
        titleHi: 'गोवा एडवेंचर और प्रस्थान',
        description: 'Breakfast and hotel check-out, Water sports activities at calangute/Baga (Optional), Parasailing, Jetski, Banana Ride, Bumper Ride, Free time for shopping or Beach relaxation, Drop at Goa airport/railway station for departure',
        descriptionHi: 'पुरानी गोवा के चर्च, मसाला बागान, और स्थानीय बाजारों की यात्रा करें'
      }
    ],
    included: [
      '2 nights hotel accommodation in Goa',
      '3 breakfast and 2 dinner',
      'Two wheelers for sightseeing in Goa',
      'Private cab for sightseeing and transfers',
      'All applicable taxes and service charges',
      'Driver allowance, toll, parking, and fuel charges'
    ],
    includedHi: [
      'गोवा में 2 रात का होटल आवास',
      '3 नाश्ता और 2 रात का खाना',
      'गोवा में दर्शनीय स्थलों के लिए दोपहिया वाहन',
      'दर्शनीय स्थलों और स्थानांतरण के लिए निजी कैब',
      'सभी लागू कर और सेवा शुल्क',
      'ड्राइवर की अनुमति, टॉल, पार्किंग और ईंधन शुल्क'
    ],
    excluded: [
      'Flight/train tickets (Extra price for the tickets)',
      'Lunch and personal expenses',
      'Pickup and drop from airport/railway station (Extra price for the service)',
      'Water sports activities (Extra price for the activities)',
      'Any services not mentioned in the inclusions',
      'Boat cruise (Optional)',
      'Shopping and souvenirs'
    ],
    excludedHi: [
      'हवाई/रेल टिकट (टिकटों के लिए अतिरिक्त मूल्य)',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'हवाई अड्डे/रेलवे स्टेशन से पिकअप और ड्रॉप (सेवा के लिए अतिरिक्त मूल्य)',
      'जल खेल गतिविधियाँ (गतिविधियों के लिए अतिरिक्त मूल्य)',
      'कोई भी सेवाएँ जो समावेश में उल्लिखित नहीं हैं',
      'बोट क्रूज (वैकल्पिक)',
      'खरीदारी और स्मृति चिन्ह'
    ]
  },
  {
    id: 'varkala',
    title: 'Varkala Beach Retreat',
    titleHi: 'वर्कला बीच रिट्रीट',
    description: 'Relax on the pristine beaches of Varkala, enjoy Ayurvedic treatments and stunning cliff views',
    descriptionHi: 'वर्कला के प्राचीन समुद्र तटों पर आराम करें, आयुर्वेदिक उपचार और शानदार चट्टान के दृश्य का आनंद लें',
    price: 2300,
    duration: 2,
    min: 24,
    category: 'beach',
    image: '/varkala.jpg',
    gallery: [
      '/images/varkala1.jpg',
      '/images/varkala2.jpg',
      '/images/varkala3.jpg'
    ],
    videos: [
      '/videos/varkala1.mp4'
    ],
    highlights: [
      'Pristine beaches',
      'Ayurvedic spa treatments',
      'Cliff views and sunsets',
      'Local seafood cuisine',
      'Yoga and meditation sessions'
    ],
    highlightsHi: [
      'प्राचीन समुद्र तट',
      'आयुर्वेदिक स्पा उपचार',
      'चट्टान के दृश्य और सूर्यास्त',
      'स्थानीय समुद्री भोजन व्यंजन',
      'योग और ध्यान सत्र'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varkala',
        titleHi: 'वर्कला में आगमन',
        description: 'Pickup from railway station, hotel check-in, Anjengo Fort visit, Light House visit, Golden islan, varkala beach, Dinner, Overnight stay at Varkala hotel',
        descriptionHi: 'रेलवे स्टेशन से पिकअप, होटल चेक-इन, अंजेंगो किला यात्रा, लाइट हाउस यात्रा, गोल्डन आइलैंड, वर्कला बीच, रात का खाना, वर्कला होटल में रात भर ठहराव'
      },
      {
        day: 2,
        title: 'Varkala Relaxation',
        titleHi: 'वर्कला विश्राम',
        description: 'Breakfast at hotel, check-out from hotel, jatayu earth center visit, Mangrove forest visit, Kapil Beach, Kaveri Elephant Park, Departure from Varkala',
        descriptionHi: 'होटल में नाश्ता, होटल से चेक-आउट, जटायु अर्थ सेंटर यात्रा, मैंग्रोव जंगल यात्रा, कपिल बीच, कावेरी एलीफेंट पार्क, वर्कला से प्रस्थान'
      }
      
    ],
    included: [
      'Deluxe hotel accommodation in Varkala',
      'pickup and drop from railway station',
      'private cab for sightseeing and transfers',
      'sightseeing as per itinerary',
      'Breakfast and Dinner',
      'kayaking at mangrove forest',
      'toll, parking, fuel charges and driver allowance',
      'all applicable taxes and service charges'
    ],
    includedHi: [
      'वर्कला में डीलक्स होटल आवास',
      'रेलवे स्टेशन से पिकअप और ड्रॉप',
      'दर्शनीय स्थलों और स्थानांतरण के लिए निजी कैब',
      'यात्रा कार्यक्रम के अनुसार दर्शनीय स्थल',
      'नाश्ता और रात का खाना',
      'मैंग्रोव जंगल में कायकिंग',
      'टॉल, पार्किंग, ईंधन शुल्क और ड्राइवर की अनुमति',
      'सभी लागू कर और सेवा शुल्क'
    ],
    excluded: [
      'Entrance fees to monuments and parks',
      'Any services not mentioned in the inclusions',
      'Personal expenses',
      'Adventure activities'
    ],
    excludedHi: [
      'स्मारकों और पार्कों में प्रवेश शुल्क',
      'इन्क्लूजन में नहीं उल्लिखित सेवाएं',
      'व्यक्तिगत खर्च',
      'साहसिक गतिविधियाँ'
    ]
  },

  {
    id: 'pondicherry',
    title: 'Pondicherry Heritage Walk',
    titleHi: 'पांडिचेरी विरासत यात्रा',
    description: 'Explore the French colonial charm of Pondicherry with heritage walks, beaches, and vibrant culture',
    descriptionHi: 'फ्रेंच औपनिवेशिक आकर्षण का अन्वेषण करें पांडिचेरी के साथ विरासत यात्राएं, समुद्र तट, और जीवंत संस्कृति',
    price: 5999,
    duration: 3,
    min: 4,
    category: 'beach',
    image: '/pondicherry.jpg',
    gallery: [
      '/images/pondicherry1.jpg',
      '/images/pondicherry2.jpg',
      '/images/pondicherry3.jpg'
    ],
    videos: [
      '/videos/pondicherry1.mp4'
    ],
    highlights: [
      'Pondicherry beaches',
      'French colonial architecture',
      'Auroville visit',
      'Local markets and cuisine',
      'Heritage walks'
    ],
    highlightsHi: [
      'पांडिचेरी समुद्र तट',
      'फ्रेंच औपनिवेशिक वास्तुकला',
      'औरोविल यात्रा',
      'स्थानीय बाजार और व्यंजन',
      'विरासत यात्राएं'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Pondicherry',
        titleHi: 'पांडिचेरी में आगमन',
        description: 'Transfer to hotel, evening beach walk',
        descriptionHi: 'होटल में स्थानांतरण, शाम की समुद्र तट सैर'
      },

      {
        day: 2,
        title: 'Pondicherry Sightseeing',
        titleHi: 'पांडिचेरी दर्शनीय स्थल',
        description: 'Visit French Quarter, Auroville, and local markets',
        descriptionHi: 'फ्रेंच क्वार्टर, औरोविल, और स्थानीय बाजारों की यात्रा करें'
      },

      {
        day: 3,
        title: 'Cultural Exploration',
        titleHi: 'सांस्कृतिक अन्वेषण',
        description: 'Heritage walks, local cuisine tasting, and beach relaxation',
        descriptionHi: 'विरासत यात्राएं, स्थानीय व्यंजन चखना, और समुद्र तट विश्राम'
      },

      {
        day: 4,
        title: 'Departure from Pondicherry',
        titleHi: 'पांडिचेरी से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }

    ],
    included: [
      'Cultural tours and visits',
      'Daily breakfast',
      'Entrance fees to historic sites',
      'Local market visits',
      'Professional tour guide'
    ],
    includedHi: [
      'सांस्कृतिक पर्यटन और यात्राएं',
      'दैनिक नाश्ता',
      'ऐतिहासिक स्थलों के प्रवेश शुल्क',
      'स्थानीय बाजार यात्राएं',
      'पेशेवर टूर गाइड'
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
  },




  {
    id: 'gujarat',
    title: 'Gujarat Cultural Tour',
    titleHi: 'गुजरात सांस्कृतिक यात्रा',
    description: 'Explore the rich culture, heritage, and festivals of Gujarat with visits to historic sites and vibrant markets',
    descriptionHi: 'गुजरात की समृद्ध संस्कृति, विरासत और त्योहारों का अन्वेषण करें, ऐतिहासिक स्थलों और जीवंत बाजारों की यात्राओं के साथ',
    price: 5999,
    duration: 3,
    min: 4,
    category: 'cultural',
    image: '/gujarat.jpg',
    gallery: [
      '/images/gujarat1.jpg',
      '/images/gujarat2.jpg',
      '/images/gujarat3.jpg'
    ],
    videos: [
      '/videos/gujarat1.mp4'
    ],
    highlights: [
      'Cultural tours and heritage sites',
      'Vibrant local markets',
      'Traditional Gujarati cuisine',
      'Folk dance and music performances',
      'Visit to historic temples and forts'
    ],
    highlightsHi: [
      'सांस्कृतिक पर्यटन और विरासत स्थल',
      'जीवंत स्थानीय बाजार',
      'पारंपरिक गुजराती व्यंजन',
      'लोक नृत्य और संगीत प्रदर्शन',
      'ऐतिहासिक मंदिरों और किलों की यात्रा'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Gujarat',
        titleHi: 'गुजरात में आगमन',
        description: 'Airport transfer, beach resort check-in, evening beach walk',
        descriptionHi: 'हवाई अड्डा स्थानांतरण, बीच रिसॉर्ट चेक-इन, शाम की समुद्र तट सैर'
      },
      {
        day: 2,
        title: 'Gujarat Sightseeing',
        titleHi: 'गुजरात दर्शनीय स्थल',
        description: 'Visit historic sites, cultural landmarks, and vibrant markets',
        descriptionHi: 'ऐतिहासिक स्थलों, सांस्कृतिक स्थलों, और जीवंत बाजारों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Cultural Exploration',
        titleHi: 'सांस्कृतिक अन्वेषण',
        description: 'Heritage walks, local cuisine tasting, and market visits',
        descriptionHi: 'विरासत यात्राएं, स्थानीय व्यंजन चखना, और बाजार यात्राएं'
      },
      {
        day: 4,
        title: 'Departure from Gujarat',
        titleHi: 'गुजरात से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Cultural tours and visits',
      'Daily breakfast',
      'Entrance fees to historic sites',
      'Local market visits',
      'Professional tour guide'
    ],
    includedHi: [
      'सांस्कृतिक पर्यटन और यात्राएं',
      'दैनिक नाश्ता',
      'ऐतिहासिक स्थलों के प्रवेश शुल्क',
      'स्थानीय बाजार यात्राएं',
      'पेशेवर टूर गाइड'
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
  ,


  {
    id: 'Maharashtra-Temples',
    title: 'Maharashtra Temples Tour',
    titleHi: 'महाराष्ट्र मंदिर यात्रा',
    description: 'Explore the ancient and sacred temples of Maharashtra, experiencing rich culture and spirituality',
    descriptionHi: 'महाराष्ट्र के प्राचीन और पवित्र मंदिरों का अन्वेषण करें, समृद्ध संस्कृति और आध्यात्मिकता का अनुभव करें',
    price: 4999,
    duration: 3,
    min: 4,
    category: 'spiritual',
    image: '/maharashtra.jpg',
    gallery: [
      '/images/manali1.jpg',
      '/images/manali2.jpg',
      '/images/manali3.jpg'
    ],
    videos: [
      '/videos/maharashtra1.mp4'
    ],
    highlights: [
      'Visit to Trimbakeshwar Temple',
      'Exploration of Bhimashankar Temple',
      'Tour of Elephanta Caves',
      'Experience at Shirdi Sai Baba Temple',
      'Cultural immersion in Pune'
    ],
    highlightsHi: [
      'त्र्यंबकेश्वर मंदिर की यात्रा',
      'भीमाशंकर मंदिर का अन्वेषण',
      'एलेफंता गुफाओं की यात्रा',
      'शिरडी साई बाबा मंदिर में अनुभव',
      'पुणे में सांस्कृतिक डुबकी'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nashik',
        titleHi: 'नासिक में आगमन',
        description: 'Arrive at Nashik, transfer to hotel, evening free for leisure',
        descriptionHi: 'नासिक में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Maharashtra Temples Tour',
        titleHi: 'महाराष्ट्र मंदिर यात्रा',
        description: 'Visit Trimbakeshwar Temple, Bhimashankar Temple, and Elephanta Caves',
        descriptionHi: 'त्र्यंबकेश्वर मंदिर, भीमाशंकर मंदिर, और एलेफंता गुफाओं की यात्रा करें'
      },
      {
        day: 3,
        title: 'Shirdi Sai Baba Temple & Pune Cultural Tour',
        titleHi: 'शिरडी साई बाबा मंदिर और पुणे सांस्कृतिक यात्रा',
        description: 'Visit Shirdi Sai Baba Temple and experience cultural immersion in Pune',
        descriptionHi: 'शिरडी साई बाबा मंदिर की यात्रा करें और पुणे में सांस्कृतिक डुबकी लगाएं'
      }
    ],
    included: [
      'Hotel accommodation in Nashik and Pune',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to temples and caves',
      'Professional tour guide'
    ],
    includedHi: [
      'नासिक और पुणे में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'मंदिरों और गुफाओं के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Madhya-Pradesh-Temples',
    title: 'Madhya Pradesh Temples Tour',
    titleHi: 'मध्य प्रदेश मंदिर यात्रा',
    description: 'Explore the ancient and sacred temples of Madhya Pradesh, experiencing rich culture and spirituality',
    descriptionHi: 'मध्य प्रदेश के प्राचीन और पवित्र मंदिरों का अन्वेषण करें, समृद्ध संस्कृति और आध्यात्मिकता का अनुभव करें',
    price: 4500,
    duration: 3,
    min: 4,
    category: 'spiritual',
    image: '/madhya-pradesh.jpg',
    gallery: [
      '/images/manali1.jpg',
      '/images/manali2.jpg',
      '/images/manali3.jpg'
    ],
    videos: [
      '/videos/mp1.mp4'
    ],
    highlights: [
      'Visit to Khajuraho Temples',
      'Exploration of Mahakaleshwar Temple',
      'Tour of Sanchi Stupa',
    ],
    highlightsHi: [
      'खजुराहो मंदिरों की यात्रा',
      'महाकालेश्वर मंदिर का अन्वेषण',
      'सांची स्तूप की यात्रा',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Khajuraho',
        titleHi: 'खजुराहो में आगमन',
        description: 'Arrive at Khajuraho, transfer to hotel, evening free for leisure',
        descriptionHi: 'खजुराहो में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Madhya Pradesh Temples Tour',
        titleHi: 'मध्य प्रदेश मंदिर यात्रा',
        description: 'Visit Khajuraho Temples, Mahakaleshwar Temple, and Sanchi Stupa',
        descriptionHi: 'खजुराहो मंदिर, महाकालेश्वर मंदिर, और सांची स्तूप की यात्रा करें'
      },
      {
        day: 3,
        title: 'Madhya Pradesh Temples Tour',
        titleHi: 'मध्य प्रदेश मंदिर यात्रा',
        description: 'Visit Khajuraho Temples, Mahakaleshwar Temple, and Sanchi Stupa',
        descriptionHi: 'खजुराहो मंदिर, महाकालेश्वर मंदिर, और सांची स्तूप की यात्रा करें'
      }
    ],
    included: [
      'Hotel accommodation in Khajuraho',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to temples and stupas',
      'Professional tour guide'
    ],
    includedHi: [
      'खजुराहो में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'मंदिरों और स्तूपों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Darjeeling',
    title: 'Darjeeling Tour',
    titleHi: 'दार्जिलिंग यात्रा',
    description: 'Explore the scenic beauty and cultural heritage of Darjeeling, experiencing its unique charm and tranquility',
    descriptionHi: 'दार्जिलिंग की सुरम्य सुंदरता और सांस्कृतिक विरासत का अन्वेषण करें, इसकी अनूठी आकर्षण और शांति का अनुभव करें',
    price: 5555,
    duration: 3,
    min: 4,
    category: 'spiritual',
    image: '/Darjeeling.jpg',
    gallery: [
      '/images/Darjeeling1.jpg',
      '/images/Darjeeling2.jpg',
      '/images/Darjeeling3.jpg'
    ],
    videos: [
      '/videos/darj1.mp4'
    ],
    highlights: [
      'Visit to Tiger Hill for sunrise',
      'Exploration of Batasia Loop',
      'Tour of Darjeeling Tea Gardens',
      'Ride on the Darjeeling Himalayan Railway',
      'Cultural immersion in local monasteries'
    ],
    highlightsHi: [
      'टाइगर हिल में सूर्योदय की यात्रा',
      'बाटासिया लूप का अन्वेषण',
      'दार्जिलिंग चाय बागानों की यात्रा',
      'दार्जिलिंग हिमालयन रेलवे पर सवारी',
      'स्थानीय मठों में सांस्कृतिक डुबकी'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Darjeeling',
        titleHi: 'दार्जिलिंग में आगमन',
        description: 'Arrive at Darjeeling, transfer to hotel, evening free for leisure',
        descriptionHi: 'दार्जिलिंग में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Darjeeling Tour',
        titleHi: 'दार्जिलिंग यात्रा',
        description: 'Visit Tiger Hill, Batasia Loop, and Darjeeling Tea Gardens',
        descriptionHi: 'टाइगर हिल, बाटासिया लूप, और दार्जिलिंग चाय बागानों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Darjeeling Himalayan Railway & Monasteries',
        titleHi: 'दार्जिलिंग हिमालयन रेलवे और मठ',
        description: 'Ride on Darjeeling Himalayan Railway and visit local monasteries',
        descriptionHi: 'दार्जिलिंग हिमालयन रेलवे पर सवारी करें और स्थानीय मठों की यात्रा करें'
      }
    ],
    included: [
      'Hotel accommodation in Darjeeling',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'दार्जिलिंग में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Ooty',
    title: 'Ooty Tour',
    titleHi: 'ऊटी यात्रा',
    description: 'Explore the scenic beauty and cultural heritage of Ooty, experiencing its unique charm and tranquility',
    descriptionHi: 'ऊटी की सुरम्य सुंदरता और सांस्कृतिक विरासत का अन्वेषण करें, इसकी अनूठी आकर्षण और शांति का अनुभव करें',
    price: 3599,
    duration: 3,
    min: 4,
    category: 'mountain',
    image: '/Ooty.jpg',
    gallery: [
      '/images/Ooty1.jpg',
      '/images/Ooty2.jpg',
      '/images/Ooty3.jpg'
    ],
    videos: [
      '/videos/ooty1.mp4'
    ],
    highlights: [
      'ooty Hill for sunrise',
      'Exploration of Botanical Gardens',
      'Tour of Ooty Lake',
      'Ride on the Nilgiri Mountain Railway',
      'Cultural immersion in local markets'
    ],
    highlightsHi: [
      'ऊटी हिल में सूर्योदय की यात्रा',
      'बोटैनिकल गार्डन्स का अन्वेषण',
      'ऊटी झील की यात्रा',
      'निलगिरी माउंटेन रेलवे पर सवारी',
      'स्थानीय बाजारों में सांस्कृतिक डुबकी'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ooty',
        titleHi: 'ऊटी में आगमन',
        description: 'Arrive at Ooty, transfer to hotel, evening free for leisure',
        descriptionHi: 'ऊटी में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Ooty Tour',
        titleHi: 'ऊटी यात्रा',
        description: 'Visit Ooty Hill, Botanical Gardens, and Ooty Lake',
        descriptionHi: 'ऊटी हिल, बोटैनिकल गार्डन्स, और ऊटी झील की यात्रा करें'
      },
      {
        day: 3,
        title: 'Nilgiri Mountain Railway & Local Markets',
        titleHi: 'निलगिरी माउंटेन रेलवे और स्थानीय बाजार',
        description: 'Ride on Nilgiri Mountain Railway and visit local markets',
        descriptionHi: 'निलगिरी माउंटेन रेलवे पर सवारी करें और स्थानीय बाजारों की यात्रा करें'
      }
    ],
    included: [
      'Hotel accommodation in Ooty',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'ऊटी में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Kodaikanal',
    title: 'Kodaikanal Tour',
    titleHi: 'कोडाइकनाल यात्रा',
    description: 'kodaikanal is a beautiful hill station in Tamil Nadu, known for its scenic landscapes, pleasant climate, and serene environment. It is often referred to as the "Princess of Hill Stations" and is a popular destination for nature lovers and tourists seeking tranquility.',
    descriptionHi: 'कोडाइकनाल तमिलनाडु में एक सुंदर हिल स्टेशन है, जो अपने सुरम्य परिदृश्यों, सुखद जलवायु, और शांत वातावरण के लिए जाना जाता है। इसे अक्सर "हिल स्टेशनों की राजकुमारी" कहा जाता है और यह प्रकृति प्रेमियों और शांति की तलाश में पर्यटकों के लिए एक लोकप्रिय गंतव्य है।',
    price: 3499,
    duration: 3,
    min: 4,
    category: 'mountain',
    image: '/kodaikanal.jpg',
    gallery: [
      '/images/Kodaikanal1.jpg',
      '/images/Kodaikanal2.jpg',
      '/images/Kodaikanal3.jpg'
    ],
    videos: [
      '/videos/Kodaikanal1.mp4'
    ],
    highlights: [
      'Kodaikanal Lake for boating',
      'Visit to Coaker\'s Walk',
      'Exploration of Bryant Park',
      'Tour of Pillar Rocks',
      'Visit to Silver Cascade Falls'
    ],
    highlightsHi: [
      'कोडाइकनाल झील में नौका विहार',
      'कोकर\'स वॉक की यात्रा',
      'ब्रायंट पार्क का अन्वेषण',
      'पिलर रॉक्स की यात्रा',
      'सिल्वर कास्केड फॉल्स की यात्रा'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kodaikanal',
        titleHi: 'कोडाइकनाल में आगमन',
        description: 'Arrive at Kodaikanal, transfer to hotel, evening free for leisure',
        descriptionHi: 'कोडाइकनाल में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Kodaikanal Tour',
        titleHi: 'कोडाइकनाल यात्रा',
        description: 'Visit Coaker\'s Walk, Bryant Park, Pillar Rocks, and Silver Cascade Falls',
        descriptionHi: 'कोकर\'स वॉक, ब्रायंट पार्क, पिलर रॉक्स, और सिल्वर कास्केड फॉल्स की यात्रा करें'
      },
      {
        day: 3,
        title: 'Kodaikanal Lake & Local Markets',
        titleHi: 'कोडाइकनाल झील और स्थानीय बाजार',
        description: 'Visit Kodaikanal Lake and explore local markets',
        descriptionHi: 'कोडाइकनाल झील की यात्रा करें और स्थानीय बाजारों का अन्वेषण करें'
      }
    ],
    included: [
      'Hotel accommodation in Kodaikanal',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'कोडाइकनाल में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },
  {
    id: 'Delhi-Agra',
    title: 'Delhi Agra Heritage Tour',
    titleHi: 'दिल्ली आगरा विरासत यात्रा',
    description: 'Explore the rich heritage of Delhi and Agra, visiting iconic monuments and experiencing vibrant culture',
    descriptionHi: 'दिल्ली और आगरा की समृद्ध विरासत का अन्वेषण करें, प्रतिष्ठित स्मारकों की यात्रा करें और जीवंत संस्कृति का अनुभव करें',
    price: 3399,
    duration: 2,
    min: 4,
    category: 'cultural',
    image: '/delhi1.jpg',
    gallery: [
      '/images/delhi1.jpg',
      '/images/delhi2.jpg',
      '/images/delhi3.jpg'
    ],
    videos: [
      '/videos/delhi1.mp4'
    ],
    highlights: [
      'Visit to Red Fort and Qutub Minar in Delhi',
      'Exploration of India Gate and Humayun\'s Tomb',
      'Tour of Taj Mahal and Agra Fort in Agra' 
    ],
    highlightsHi: [
      'दिल्ली में लाल किला और कुतुब मीनार की यात्रा',
      'इंडिया गेट और हुमायूँ का मकबरा का अन्वेषण',
      'आगरा में ताज महल और आगरा किला की यात्रा'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        titleHi: 'दिल्ली में आगमन',
        description: 'Arrive at Delhi, transfer to hotel, evening free for leisure',
        descriptionHi: 'दिल्ली में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Delhi Agra Heritage Tour',
        titleHi: 'दिल्ली आगरा विरासत यात्रा',
        description: 'Visit Red Fort, Qutub Minar, India Gate, Humayun\'s Tomb, Taj Mahal, and Agra Fort',
        descriptionHi: 'लाल किला, कुतुब मीनार, इंडिया गेट, हुमायूँ का मकबरा, ताज महल, और आगरा किला की यात्रा करें'
      },
      {
        day: 3,
        title: 'Departure from Agra',
        titleHi: 'आगरा से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Hotel accommodation in Delhi and Agra',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to monuments',
      'Professional tour guide'
    ],
    includedHi: [
      'दिल्ली और आगरा में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'स्मारकों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },
  {

    id: 'Aarupadai',
    title: 'Aarupadai Veedu Tour',
    titleHi: 'आरुपदाई वीडू यात्रा',
    description: 'Explore the beautiful Aarupadai Veedu, a sacred place in Tamil Nadu',
    descriptionHi: 'तमिलनाडु में एक पवित्र स्थान, आरुपदाई वीडू का अन्वेषण करें',
    price: 4999,
    duration: 5,
    min: 4,
    category: 'spiritual',
    image: '/aarupadai.jpg',
    gallery: [
      '/images/aarupadai1.jpg',
      '/images/aarupadai2.jpg',
      '/images/aarupadai3.jpg'
    ],
    videos: [
      '/videos/aarupadai1.mp4'
    ],
    highlights: [
      'Visit to Aarupadai Veedu temple',
      'Exploration of the sacred site and surrounding area'
    ],
    highlightsHi: [
      'आरुपदाई वीडू मंदिर की यात्रा',
      'पवित्र स्थल और परिसर का अन्वेषण'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Aarupadai Veedu',
        titleHi: 'आरुपदाई वीडू में आगमन',
        description: 'Arrive at Aarupadai Veedu, transfer to hotel, evening free for leisure',
        descriptionHi: 'आरुपदाई वीडू में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Aarupadai Veedu Tour',
        titleHi: 'आरुपदाई वीडू यात्रा',
        description: 'Visit the temple and explore the sacred site and surrounding area',
        descriptionHi: 'मंदिर की यात्रा करें और पवित्र स्थल और परिसर का अन्वेषण करें'
      },
      {
        day: 3,
        title: 'Aarupadai Veedu Tour',
        titleHi: 'आरुपदाई वीडू यात्रा', 
        description: 'Visit the temple and explore the sacred site and surrounding area',
        descriptionHi: 'मंदिर की यात्रा करें और पवित्र स्थल और परिसर का अन्वेषण करें'
      },
      {
        day: 4,
        title: 'Aarupadai Veedu Tour',
        titleHi: 'आरुपदाई वीडू यात्रा',
        description: 'Visit the temple and explore the sacred site and surrounding area',
        descriptionHi: 'मंदिर की यात्रा करें और पवित्र स्थल और परिसर का अन्वेषण करें'
      },
      {
        day: 5,
        title: 'Departure from Aarupadai Veedu',
        titleHi: 'आरुपदाई वीडू से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Hotel accommodation in Aarupadai Veedu',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'आरुपदाई वीडू में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  }
];

type SamplePackageDetails = Pick<
  Package,
  | 'id'
  | 'packageType'
  | 'location'
  | 'title'
  | 'titleHi'
  | 'description'
  | 'descriptionHi'
  | 'price'
  | 'duration'
  | 'category'
  | 'image'
  | 'gallery'
  | 'highlights'
  | 'highlightsHi'
>;

const createSamplePackage = (details: SamplePackageDetails): Package => ({
  ...details,
  isSample: true,
  min: details.packageType === 'iv' ? 10 : 2,
  videos: [],
  itinerary: Array.from({ length: details.duration }, (_, index) => {
    const day = index + 1;
    const isArrival = index === 0;
    const isDeparture = index === details.duration - 1;
    const title = isArrival ? 'Arrival and check-in' : isDeparture ? 'Departure' : `Explore ${details.location}`;
    const titleHi = isArrival ? 'आगमन और चेक-इन' : isDeparture ? 'प्रस्थान' : `${details.location} भ्रमण`;
    const description = isArrival
      ? `Arrive in ${details.location}, check in, and review the planned itinerary.`
      : isDeparture
        ? 'Check out and depart for your onward journey.'
        : `Enjoy the planned activities and highlights around ${details.location}.`;
    const descriptionHi = isArrival
      ? `${details.location} पहुँचें, चेक-इन करें और यात्रा कार्यक्रम देखें।`
      : isDeparture
        ? 'चेक-आउट करें और आगे की यात्रा के लिए प्रस्थान करें।'
        : `${details.location} के नियोजित अनुभवों और खास स्थलों का आनंद लें।`;

    return { day, title, titleHi, description, descriptionHi };
  }),
  included: ['Sample accommodation', 'Local transfers as per final itinerary', 'Selected planned visits'],
  includedHi: ['नमूना आवास', 'अंतिम यात्रा कार्यक्रम के अनुसार स्थानीय स्थानांतरण', 'चुनिंदा नियोजित भ्रमण'],
  excluded: ['Travel to and from the destination', 'Meals not listed in the final itinerary', 'Personal expenses and travel insurance'],
  excludedHi: ['गंतव्य तक आने-जाने का किराया', 'अंतिम यात्रा कार्यक्रम में शामिल न किए गए भोजन', 'व्यक्तिगत खर्च और यात्रा बीमा'],
});

const samplePackages: Package[] = [
  createSamplePackage({
    id: 'sample-bali-international',
    packageType: 'international',
    location: 'Bali, Indonesia',
    title: 'Bali Island Escape',
    titleHi: 'बाली द्वीप यात्रा',
    description: 'Sample international itinerary featuring Bali beaches, Ubud, and island highlights. Contact us to customize dates and inclusions.',
    descriptionHi: 'बाली के समुद्र तटों, उबुद और द्वीप के खास स्थलों के साथ नमूना अंतरराष्ट्रीय यात्रा। बदलाव और सुविधाओं के लिए संपर्क करें।',
    price: 49999,
    duration: 5,
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80',
    ],
    highlights: ['Explore Ubud and its local culture', 'Relax at Bali beaches', 'Visit scenic temples and viewpoints'],
    highlightsHi: ['उबुद और स्थानीय संस्कृति का अनुभव करें', 'बाली के समुद्र तटों पर आराम करें', 'सुंदर मंदिरों और नज़ारों की यात्रा करें'],
  }),
  createSamplePackage({
    id: 'sample-maldives-honeymoon',
    packageType: 'honeymoon',
    location: 'Maldives',
    title: 'Maldives Honeymoon Retreat',
    titleHi: 'मालदीव हनीमून यात्रा',
    description: 'Sample honeymoon getaway with island resort time, sunset views, and relaxed couple experiences. Contact us to customize.',
    descriptionHi: 'द्वीप रिसॉर्ट, सूर्यास्त के नज़ारों और जोड़ों के लिए आरामदायक अनुभवों के साथ नमूना हनीमून यात्रा। बदलाव के लिए संपर्क करें।',
    price: 69999,
    duration: 4,
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80',
    ],
    highlights: ['Island resort stay', 'Sunset by the lagoon', 'Leisure time for two'],
    highlightsHi: ['द्वीप रिसॉर्ट में ठहराव', 'लैगून के किनारे सूर्यास्त', 'दो लोगों के लिए आराम का समय'],
  }),
  createSamplePackage({
    id: 'sample-pondicherry-industrial-visit',
    packageType: 'iv',
    location: 'Puducherry, India',
    title: 'Puducherry Student Industrial Visit',
    titleHi: 'पुदुचेरी छात्र औद्योगिक भ्रमण',
    description: 'Sample student group itinerary combining local industry exposure, heritage walks, and a science centre visit. Contact us to tailor it to your institution.',
    descriptionHi: 'स्थानीय उद्योग अनुभव, विरासत भ्रमण और विज्ञान केंद्र की यात्रा के साथ नमूना छात्र समूह यात्रा। संस्थान के अनुसार इसे बनाने के लिए संपर्क करें।',
    price: 7999,
    duration: 3,
    category: 'cultural',
    image: '/pondicherry.jpg',
    gallery: ['/pondicherry.jpg', '/gallery/0.jpg', '/gallery/1.jpg'],
    highlights: ['Educational industry exposure', 'Puducherry heritage walk', 'Group-friendly itinerary'],
    highlightsHi: ['शैक्षिक औद्योगिक अनुभव', 'पुदुचेरी विरासत भ्रमण', 'समूह के लिए सुविधाजनक यात्रा कार्यक्रम'],
  }),
];

export const packages: Package[] = [
  ...currentPackages.map((pkg) => ({
    ...pkg,
    packageType: pkg.id === 'Aarupadai' ? 'spiritualHeritage' as const : 'domestic' as const,
  })),
  ...samplePackages,
];
