import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-animatable';
import ProductCart from '../common/ProductCart';
import styles from './styles';

const CartComponent = () => {
  const data = [
    {
      staus: 0,
      msg: 'Product List!',
      totalProduct: 0,
      data: [
        {
          _id: '6409a710ed06c7b3e1973054',
          title: 'Iphone 13',
          description:
            'iPhone 13 with Ceramic Shield. Tougher than any smartphone glass. Buy now. Our most advanced dual-camera system ever',
          price: '999',
          imageUrl:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6ae7133d-64fb-42e0-bf4a-9e8504d1488e.png?fit=scale-down&source=next&width=700',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.829Z',
          updatedAt: '2023-03-09T09:29:52.829Z',
        },
        {
          _id: '6409a710ed06c7b3e1973055',
          title: 'Pixel 6',
          description:
            "Pixel 6 is built from Pixel's toughest Gorilla Glass yet, with up to 2x better scratch resistance than previous Pixel phones",
          price: '799',
          imageUrl:
            'https://media.carphonewarehouse.com/is/image/cpw2/pixel-6-proWHITE8?$xl-retina$',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.830Z',
          updatedAt: '2023-03-09T09:29:52.830Z',
        },
        {
          _id: '6409a710ed06c7b3e1973056',
          title: 'Vivo x70 pro',
          description:
            'Fluorite AG. An exquisite surface. The unforgettable touch of comfort. ... 5G platform. Smooth performance to pursue perfection',
          price: '599',
          imageUrl:
            'https://1.bp.blogspot.com/-nvMlSm39dUw/YQTp8xDky3I/AAAAAAAAAw0/qp8BNDB8TlwmQu9wC-gMttRjG1rtGhxpgCLcBGAsYHQ/s500/Vivo-X60-Pro-techjigyasha.png',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.830Z',
          updatedAt: '2023-03-09T09:29:52.830Z',
        },
        {
          _id: '6409a710ed06c7b3e1973057',
          title: 'Redmi note 10 pro',
          description:
            'The phone comes with a 6.67-inch touchscreen display. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor',
          price: '249',
          imageUrl:
            'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1620378135.39676516.png',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.830Z',
          updatedAt: '2023-03-09T09:29:52.830Z',
        },
        {
          _id: '6409a710ed06c7b3e1973058',
          title: 'Samsung Galaxy S23 5G',
          description:
            'Designed with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film.',
          price: '8062',
          imageUrl:
            'https://m.media-amazon.com/images/I/41YYQ+tFwCL._SY300_SX300_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.830Z',
          updatedAt: '2023-03-09T09:29:52.830Z',
        },
        {
          _id: '6409a710ed06c7b3e1973059',
          title: 'Xiome Redmi 10 Power',
          description:
            'The phone comes with a 6.67-inch touchscreen display. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor',
          price: '65.25',
          imageUrl:
            'https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UY327_FMwebp_QL65_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.830Z',
          updatedAt: '2023-03-09T09:29:52.830Z',
        },
        {
          _id: '6409a710ed06c7b3e197305a',
          title: 'Xiaomi 12 Pro | 5G',
          description:
            'The Pro-grade triple 50MP camera array unleashes the true power of a triple-camera setup. The large 50MP Sony IMX707 captures upto 120% more light. The 50MP Telephoto & 50MP Ultra-wide enable you to enjoy a top-class cinematography experience. The 32MP front facing camera is segment best',
          price: '8900',
          imageUrl:
            'https://m.media-amazon.com/images/I/31E7f7VrhgL._SX300_SY300_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.831Z',
          updatedAt: '2023-03-09T09:29:52.831Z',
        },
        {
          _id: '6409a710ed06c7b3e197305b',
          title: 'Xiaomi 11T Pro 5G Hyperphone',
          description:
            'The 5G enabled flagship Snapdragon 888 chipset is designed on a 5nm fab process and is paired with LPDDR5 RAM and UFS 3.1 storage to ensure ultra-smooth performance and seamless multitasking experience.The 6.67 FHD+ true 10-bit AMOLED display has a 120 Hz refresh rate along with 480Hz touch sampling rate. This Displaymate A+ certified panel brings vivid picture, smoother and faster touch response. It also comes with Dolby Vision, HDR 10+ certification to ensure unparalled multimedia viewing experience. Also the display is protected by Corning Gorilla Victus glass.',
          price: '985.25',
          imageUrl:
            'https://m.media-amazon.com/images/I/71qe5DogAtL._SX679_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.831Z',
          updatedAt: '2023-03-09T09:29:52.831Z',
        },
        {
          _id: '6409a710ed06c7b3e197305c',
          title: 'OnePlus 5',
          description:
            'This Amazon Renewed product will be in an unboxed or refurbished condition and has been professionally inspected and tested by an Amazon qualified supplier. Box and accessories may be generic (headphones may not be included)Camera: 20 MP Rear camera with Portrait mode, Pro mode, smart capture, Fast Auto focus | 16MP front camera',
          price: '1039.25',
          imageUrl:
            'https://m.media-amazon.com/images/I/31aA5WOQ2DL._SX300_SY300_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.831Z',
          updatedAt: '2023-03-09T09:29:52.831Z',
        },
        {
          _id: '6409a710ed06c7b3e197305d',
          title: 'OnePlus Nord CE 2 Lite 5G',
          description:
            'Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters',
          price: '2568',
          imageUrl:
            'https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.831Z',
          updatedAt: '2023-03-09T09:29:52.831Z',
        },
        {
          _id: '6409a710ed06c7b3e197305e',
          title: 'OnePlus 10R 5G',
          description:
            'Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse ModeDisplay: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9',
          price: '5658.365',
          imageUrl:
            'https://m.media-amazon.com/images/I/71BoiXkrEmL._SX679_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.832Z',
          updatedAt: '2023-03-09T09:29:52.832Z',
        },
        {
          _id: '6409a710ed06c7b3e197305f',
          title: 'OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)',
          description:
            'Camera Features: Hasselblad Camera for Mobile, Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama Mode, Tilt-Shift mode, Long Exposure Mode, 150° Wide angle Mode, Dual-View Video, Movie Mode, Xpan Mode, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse',
          price: '8999',
          imageUrl:
            'https://m.media-amazon.com/images/I/618hqM-yxtL._SX679_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.832Z',
          updatedAt: '2023-03-09T09:29:52.832Z',
        },
        {
          _id: '6409a710ed06c7b3e1973060',
          title: 'OnePlus Nord 2T 5G (Gray Shadow, 8GB RAM, 128GB Storage)',
          description:
            'Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters.Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified',
          price: '5698',
          imageUrl:
            'https://m.media-amazon.com/images/I/41qLZhKF5ZL._SX300_SY300_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.832Z',
          updatedAt: '2023-03-09T09:29:52.832Z',
        },
        {
          _id: '6409a710ed06c7b3e1973061',
          title: 'Apple iPhone 14 128GB (Product) RED',
          description:
            '15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you cant',
          price: '9999',
          imageUrl:
            'https://m.media-amazon.com/images/I/611mRs-imxL._SX679_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.832Z',
          updatedAt: '2023-03-09T09:29:52.832Z',
        },
        {
          _id: '6409a710ed06c7b3e1973062',
          title: 'Apple iPhone 14 Pro 128GB Space Black',
          description:
            '15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos',
          price: '8958.56',
          imageUrl:
            'https://m.media-amazon.com/images/I/31irWzsdLsL._SY445_SX342_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.833Z',
          updatedAt: '2023-03-09T09:29:52.833Z',
        },
        {
          _id: '6409a710ed06c7b3e1973063',
          title: 'Apple iPhone 14 Pro 256GB Deep Purple',
          description:
            '15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos',
          price: '1589.25',
          imageUrl:
            'https://m.media-amazon.com/images/I/31MX9scnEzL._SY445_SX342_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.833Z',
          updatedAt: '2023-03-09T09:29:52.833Z',
        },
        {
          _id: '6409a710ed06c7b3e1973064',
          title: 'Apple iPhone 14 Plus 128GB Midnight',
          description:
            '16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can’t',
          price: '4587.56',
          imageUrl:
            'https://m.media-amazon.com/images/I/317Qba-nyrL._SY445_SX342_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.833Z',
          updatedAt: '2023-03-09T09:29:52.833Z',
        },
        {
          _id: '6409a710ed06c7b3e1973065',
          title:
            'Google Pixel 6 Pro 5G (Cloudy White, 12GB RAM, 128GB Storage)',
          description:
            'The phone comes with a 6.67-inch touchscreen display. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor',
          price: '8576.24',
          imageUrl:
            'https://m.media-amazon.com/images/I/41Ix9X2L4zL._SX300_SY300_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.833Z',
          updatedAt: '2023-03-09T09:29:52.833Z',
        },
        {
          _id: '6409a710ed06c7b3e1973066',
          title:
            '(Renewed) Google Pixel 4a 5G (Just Black, 6GB RAM, 128GB Storage)',
          description:
            'This product has been professionally inspected and tested to be fully functional by the Sellers. - Product may be packed in a non-branded box. - Accessories may not be original but have been tested to be compatible and fully functional',
          price: '5698.25',
          imageUrl:
            'https://m.media-amazon.com/images/I/51+zLzIdUsL._SX679_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.833Z',
          updatedAt: '2023-03-09T09:29:52.833Z',
        },
        {
          _id: '6409a710ed06c7b3e1973067',
          title: 'Google Pixel 3a XL (Just Black, 64 GB) (4 GB RAM)',
          description:
            '4 GB RAM | 64 GB ROM | 14.22 cm (5.6 inch) FHD+ Display 12.2MP Rear Camera | 8MP Front Camera 3000 mAh Battery Qualcomm Snapdragon 670 Processor',
          price: '587.56',
          imageUrl: 'Google Pixel 3a XL (Just Black, 64 GB) (4 GB RAM)',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.833Z',
          updatedAt: '2023-03-09T09:29:52.833Z',
        },
        {
          _id: '6409a710ed06c7b3e1973068',
          title:
            '(Renewed) Google Pixel 6a 5G (Charcoal, 6GB RAM, 128GB Storage)',
          description:
            '15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos',
          price: '1589.25',
          imageUrl:
            'https://m.media-amazon.com/images/I/51+p2QXs81L._AC_UY327_FMwebp_QL65_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.834Z',
          updatedAt: '2023-03-09T09:29:52.834Z',
        },
        {
          _id: '6409a710ed06c7b3e1973069',
          title: '(Renewed) Google Pixel 3a (Clearly White, 64 GB) (4 GB RAM)',
          description:
            '15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos',
          price: '299',
          imageUrl:
            'https://m.media-amazon.com/images/I/71C0OH4WfpL._AC_UY327_FMwebp_QL65_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.834Z',
          updatedAt: '2023-03-09T09:29:52.834Z',
        },
        {
          _id: '6409a710ed06c7b3e197306a',
          title:
            'Google Pixel 6 Pro 5G (Cloudy White, 12GB RAM, 128GB Storage)',
          description:
            'The phone comes with a 6.67-inch touchscreen display. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor',
          price: '8576.24',
          imageUrl:
            'https://m.media-amazon.com/images/I/41Ix9X2L4zL._SX300_SY300_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.834Z',
          updatedAt: '2023-03-09T09:29:52.834Z',
        },
        {
          _id: '6409a710ed06c7b3e197306b',
          title:
            'OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)',
          description:
            'The phone comes with a 6.67-inch touchscreen display. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor',
          price: '199',
          imageUrl:
            'https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.835Z',
          updatedAt: '2023-03-09T09:29:52.835Z',
        },
        {
          _id: '6409a710ed06c7b3e197306c',
          title: 'Samsung Galaxy M32 Prime Edition (Black, 4GB RAM, 64GB)',
          description:
            'Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5',
          price: '499',
          imageUrl:
            'https://m.media-amazon.com/images/I/41i9KXVVaUL._SX300_SY300_QL70_FMwebp_.jpg',
          __v: 0,
          createdAt: '2023-03-09T09:29:52.835Z',
          updatedAt: '2023-03-09T09:29:52.835Z',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginVertical: 10}}>
        <FlatList
          data={data[0].data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ProductCart item={item} />}
          keyExtractor={item => item._id}
        />
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <Text
            style={[
              styles.text,
              {fontSize: 22, color: '#000000da', fontWeight: 'bold'},
            ]}>
            Total Price :-
          </Text>
          <Text
            style={[
              styles.text,
              {fontSize: 22, color: '#000000da', fontWeight: 'bold'},
            ]}>
            {'\u20A8'} : 5000.00
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartComponent;
