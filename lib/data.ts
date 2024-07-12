interface RoomItems {
    id: number;
    slug: string;
    title: string;
    description: string;
    additionalInfo: string;
    price1: string;
    price2: string;
    image: string;
    rating: string;
    beds: string;
    guest: string;
    size: string;
    bathroom: string;
    wifi: string;
    airbnb: string;
    images: { href: string }[];
}

export const room = [
    {
        id: 1,
        slug: "room-one",
        title: "Room one",
        description: "Our bright and cosy ground floor bedsit is suitable for executives working in Sandton or visitors to Sandton. The unit is private and looks out onto the garden. Super fast fibre internet @ 20mb. There is a small kitchenette with a microwave, fridge and kettle.",
        additionalInfo: "This is a ground floor unit with a view of the garden and an outside table and chairs. The room is compact and suitable for guests working in Sandton who just need a comfortable, safe and clean place to sleep while still providing the essentials.",
        price1: "R495",
        price2: "",
        image: "/images/Room1/one.jpeg",
        rating: "4.87",
        beds: "1 Double",
        guest: "1",
        size: "16",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/17012416",
        images: [
            { href: "/images/Room1/one.jpeg" },
            { href: "/images/Room1/two.jpeg" },
            { href: "/images/Room1/three.jpeg" },
            { href: "/images/Room1/four.jpeg" },
            { href: "/images/Room1/five.jpeg" },
        ]
    },
    {
        id: 2,
        slug: "room-two",
        title: "Room two",
        description: "Spacious, comfortable, neat and modern. A perfectly appointed room for singles or couples to enjoy for short or longer stays. We supply Netflix and super fast fibre internet to keep you connected. The room has a small kitchenette with a microwave, fridge, kettle, toaster and utensils to make your stay comfortable",
        additionalInfo: "This is a first floor unit with views of the tranquil garden rich in bird life. The room is spacious with a larger fridge and cupboard suited to longer stays. The room is suitable for single business travelers looking for a comfortable stay in Sandton or for couples visiting Sandton.",
        price1: "R650",
        price2: "R1000",
        image: "/images/Room2/one.jpg",
        rating: "4.92",
        beds: "1 Queen",
        guest: "2",
        size: "30",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/36326572",
        images: [
            { href: "/images/Room2/one.jpg" },
            { href: "/images/Room2/two.jpg" },
            { href: "/images/Room2/three.jpg" },
            { href: "/images/Room2/four.jpg" },
            { href: "/images/Room2/five.jpg" },
            { href: "/images/Room2/six.jpg" },
            { href: "/images/Room2/seven.jpg" },
            { href: "/images/Room2/eight.jpg" },
            { href: "/images/Room2/nine.jpg" },
            { href: "/images/Room2/ten.jpg" },
            { href: "/images/Room2/eleven.jpg" },
            { href: "/images/Room2/twelve.jpg" },
        ]
    },
    {
        id: 3,
        slug: "room-three",
        title: "Room three",
        description: "Spacious, comfortable, neat and modern. A perfectly appointed room for singles or couples to enjoy for short or longer stays. We supply Netflix and super fast fibre internet to keep you connected. The room has a small kitchenette with a microwave, fridge, kettle, toaster and utensils to make your stay comfortable.",
        additionalInfo: "This is a spacious first floor unit with a larger fridge and cupboard suited to longer stays. The room is suitable for single business travelers looking for a comfortable stay in Sandton or for couples visiting Sandton.",
        price1: "R650",
        price2: "R1000",
        image: "/images/Room3/one.jpg",
        rating: "4.91",
        beds: "1 Queen",
        guest: "2",
        size: "30",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/36511784",
        images: [
            { href: "/images/Room3/one.jpg" },
            { href: "/images/Room3/two.jpg" },
            { href: "/images/Room3/three.jpg" },
            { href: "/images/Room3/four.jpg" },
            { href: "/images/Room3/five.jpg" },
            { href: "/images/Room3/six.jpg" },
            { href: "/images/Room3/seven.jpg" },
            { href: "/images/Room3/eight.jpg" },
            { href: "/images/Room3/nine.jpg" },
            { href: "/images/Room3/ten.jpg" },
        ]
    },
    {
        id: 4,
        slug: "room-four",
        title: "Room four",
        description: "New executive ground floor Room in central Sandton's leafy Hurlingham. Our bright and new executive Room is suitable for executives working in Sandton or visitors to Sandton.",
        additionalInfo: "This is a spacious ground floor unit with 2 large windows looking out onto the tranquil garden frequented by many bird species. The room is minimalist but with all the essentials that a business traveler needs.",
        price1: "R750",
        price2: "R1100",
        image: "/images/room4/one.jpg",
        rating: "5.0",
        beds: "1 Queen",
        guest: "2",
        size: "30",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/699795123440362177",
        images: [
            { href: "/images/room4/one.jpg" },
            { href: "/images/room4/two.jpg" },
            { href: "/images/room4/three.jpg" },
            { href: "/images/room4/four.jpg" },
            { href: "/images/room4/five.jpg" },
            { href: "/images/room4/six.jpg" },
            { href: "/images/room4/seven.jpg" },
            { href: "/images/room4/eight.jpg" },
            { href: "/images/room4/nine.jpg" },
        ]
    },
    {
        id: 5,
        slug: "room-five",
        title: "Room five",
        description: "New executive first floor Room in central Sandton's leafy Hurlingham. Our bright and new executive Room is suitable for executives working in Sandton or visitors to Sandton.",
        additionalInfo: "This is a spacious first floor unit with a large window looking out onto the tranquil garden frequented by many bird species. The room has exposed beams as a feature and is minimalist but with all the essentials that a business traveler needs.",
        price1: "R750",
        price2: "R1100",
        image: "/images/Room5/one.jpg",
        rating: "4.91",
        beds: "1 Queen",
        guest: "2",
        size: "30",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/702175776767245666",
        images: [
            { href: "/images/Room5/one.jpg" },
            { href: "/images/Room5/two.jpg" },
            { href: "/images/Room5/three.jpg" },
            { href: "/images/Room5/four.jpg" },
            { href: "/images/Room5/five.jpg" },
            { href: "/images/Room5/six.jpg" },
            { href: "/images/Room5/seven.jpg" },
            { href: "/images/Room5/eight.jpg" },
            { href: "/images/Room5/nine.jpg" },
        ]
    },
    {
        id: 6,
        slug: "room-six",
        title: "Room six",
        description: "New executive first floor Room in central Sandton's leafy Hurlingham. Our bright and new executive Room is suitable for executives working in Sandton or visitors to Sandton.",
        additionalInfo: "This is a spacious first floor unit with a large window looking out onto the tranquil garden frequented by many bird species. The room has exposed beams as a feature and is minimalist but with all the essentials that a business traveler needs.",
        price1: "R750",
        price2: "R1100",
        image: "/images/Room6/one.jpg",
        rating: "4.94",
        beds: "1 Queen",
        guest: "2",
        size: "30",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/699794699996472553",
        images: [
            { href: "/images/Room6/one.jpg" },
            { href: "/images/Room6/two.jpg" },
            { href: "/images/Room6/three.jpg" },
            { href: "/images/Room6/four.jpg" },
            { href: "/images/Room6/five.jpg" },
            { href: "/images/Room6/six.jpg" },
            { href: "/images/Room6/seven.jpg" },
            { href: "/images/Room6/eight.jpg" },
        ]
    },
    {
        id: 7,
        slug: "room-seven",
        title: "Room seven",
        description: "New executive first floor Room in central Sandton's leafy Hurlingham. Our bright and new executive Room is suitable for executives working in Sandton or visitors to Sandton.",
        additionalInfo: "This is a spacious first floor unit with a large window looking out onto the tranquil garden frequented by many bird species. The room has exposed beams as a feature and is minimalist but with all the essentials that a business traveler needs.",
        price1: "R750",
        price2: "R1100",
        image: "/images/Room7/one.jpg",
        rating: "4.96",
        beds: "1 Queen",
        guest: "2",
        size: "30",
        bathroom: "1 bathroom (shower only)",
        wifi: "Free Wifi",
        airbnb: "https://www.airbnb.co.za/rooms/702111225031630801",
        images: [
            { href: "/images/Room7/one.jpg" },
            { href: "/images/Room7/two.jpg" },
            { href: "/images/Room7/three.jpg" },
            { href: "/images/Room7/four.jpg" },
            { href: "/images/Room7/five.jpg" },
            { href: "/images/Room7/six.jpg" },
        ]
    },
] as RoomItems[];