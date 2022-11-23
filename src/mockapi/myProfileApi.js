import img1 from '../assets/images/chain.png'

const profile_data = {
    my_profile: {
        header: {heading: 'My Profile', sub_heading: 'Edit'},
        content: [
            {label: 'First Name', type: 'text'},
            {label: 'Last Name', type: 'text'},
            {label: 'Gender', type: 'text'},
            {label: 'Date Od Birth', type: 'date'},
            {label: 'Email ID', type: 'email'},
            {label: 'Pincode', type: 'number'},
            {label: 'Phone Number', type: 'number'},
        ],
    },
    my_orders: {
        header: {heading: 'My Orders', sub_heading: 'All Orders'},
        content : [
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
        ]
    },
    wishlist: {
        header: {heading: 'My Wishlist', sub_heading: 'Edit'},
        content: [
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
            {image: img1, title: 'Necklace II', price:'₹ 10,000'},
        ],
    },
    address: {
        header: {heading: 'Address', sub_heading: 'Edit'},
        content: [
            {area: '1, 1 Ashish Shopping Centre, C G Road, Navrangpura', city: 'Ahmedabad, Gujrat', pincode: '380009'},
        ]
    },
    card: {
        header: {heading: 'Cards', sub_heading: 'Edit'},
        content: [
            {card_number: '4454-0213-4594-4523', name: 'Vicky Waelchi', cvv: '623', expiry: '12/2023' },
        ],
    },
};

export default profile_data;