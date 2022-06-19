import * as images from "../images/icons";
const laptops = [
 {
  name: "Lenovo Flex 5 Laptop SDD Intel Nvidia",
  image: images.laptop1,
  price: "599.99",
  id: "l1",
 },
 {
  name: " Acer 15.6 FHD IPS Touchscreen Chromebook",
  image: images.laptop2,
  price: "139.99",
  id: "l2",
 },
 {
  name: "Acer Nitro 5 AN515-55-53E5 Gaming Laptop ",
  image: images.laptop3,
  price: "749.53",
  id: "l3",
 },
 {
  name: "HP 15.6-inch Laptop, 11th Generation Intel Core i5-1135G7",
  image: images.laptop4,
  price: "685.00",
  id: "l4",
 },
 {
  name: "Samsung Chromebook 4 (2022 Model) 11.6 Intel UHD Graphics 600",
  image: images.laptop5,
  price: "128.00",
  id: "l5",
 },
 {
  name: "Acer Aspire 5 A515-46-R3UB ",
  image: images.laptop6,
  price: "399.00",
  id: "l6",
 },
 {
  name: "HP Pavilion 15 Laptop, 11th Gen Intel Core i7",
  image: images.laptop7,
  price: "833.99",
  id: "l7",
 },
];
const smartphones = [
 {
  name: "Samsung Galaxy Note 20 Ultra 5G Factory ",
  image: images.phone1,
  price: "1146.00",
  id: "s1",
 },
 {
  name: "Google Pixel 4a 5G ",
  image: images.phone2,
  price: "515.00",
  id: "s2",
 },
 {
  name: "Samsung Electronics Galaxy A42 5G,",
  image: images.phone3,
  price: "399.00",
  id: "s3",
 },
 {
  name: " Ulefone Note 11P (2022) Android 11",
  image: images.phone4,
  price: "169.99",
  id: "s4",
 },
 {
  name: "OnePlus Nord N200 | 5G Unlocked Android Smartphone U.S Version ",
  image: images.phone5,
  price: "209.99",
  id: "s5",
 },
 {
  name:
   "Samsung Electronics Galaxy A03s Cell Phone, Factory Unlocked Android Smartphone",
  image: images.phone6,
  price: "385.99",
  id: "s6",
 },
];
const accessories = [
 {
  name: "Logitech MK270 Wireless Keyboard And Mouse Combo",
  image: images.acc1,
  price: "35.99",
  id: "a1",
 },
 {
  name: "Original HP 63XL Black High-yield Ink Cartridge ",
  image: images.acc2,
  price: "19.99",
  id: "a2",
 },
 {
  name: "SanDisk 128GB Ultra microSDXC UHS-I ",
  image: images.acc3,
  price: "17.99",
  id: "a3",
 },
 {
  name: "SanDisk 128GB Extreme PRO SDXC UHS-I Card",
  image: images.acc4,
  price: "39.99",
  id: "a4",
 },
 {
  name: "Logitech H390 Wired Headset, Stereo Headphones ",
  image: images.acc5,
  price: "30.99",
  id: "a5",
 },
 {
  name: "Syntech USB C to USB Adapter Pack ",
  image: images.acc6,
  price: "39.99",
  id: "a6",
 },
];
const cameras = [
 {
  name: "KODAK PIXPRO Astro Zoom AZ421-BK 16MP",
  image: images.cam1,
  price: "174.95",
  id: "c1",
 },
 {
  name: "Canon EOS R Mirrorless Full Frame Camera",
  image: images.cam2,
  price: "1599.00",
  id: "c2",
 },
 {
  name: "Minolta 20 Mega Pixels High Wi-Fi Digital Camera ",
  image: images.cam3,
  price: "200.99",
  id: "c3",
 },
 {
  name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens",
  image: images.cam4,
  price: "499.99",
  id: "c4",
 },
 {
  name:
   " Panasonic LUMIX FZ80 4K Digital Camera, 18.1 Megapixel Video Camera, 60X Zoom DC VARIO",
  image: images.cam5,
  price: "499.99",
  id: "c5",
 },
 {
  name: " Minolta Pro Shot 20 Mega Pixel HD Digital Camera",
  image: images.cam6,
  price: "199.99",
  id: "c6",
 },
];
const all = [...cameras, ...accessories, ...laptops, ...smartphones];
export { smartphones, laptops, cameras, accessories, all };
