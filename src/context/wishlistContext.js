import { createContext, useState, useEffect } from 'react';

export const wishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
    // قراءة البيانات من localStorage عند بداية التطبيق
    const [wishlistItems, setWishlistItems] = useState(() => {
        const saved = localStorage.getItem('wishlist');
        return saved ? JSON.parse(saved) : [];
    });
    
    // حفظ البيانات في localStorage كل ما تتغير
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);
    
    function addToWishlist(product) {
        setWishlistItems(prev => {
            const exists = prev.find(item => item._id === product._id);
            if (exists) {
                return prev.filter(item => item._id !== product._id);
            } else {
                return [...prev, product];
            }
        });
    }
    
    
    function removeFromWishlist(productId) {
        setWishlistItems(prev => prev.filter(item => item._id !== productId));
    }
    
    function isInWishlist(productId) {
        return wishlistItems.some(item => item._id === productId);
    }
    
    function clearWishlist() {
        setWishlistItems([]);
    }
    
    return (
        <wishlistContext.Provider value={{ 
            wishlistItems, 
            addToWishlist, 
            removeFromWishlist, 
            isInWishlist,
            clearWishlist
        }}>
            {children}
        </wishlistContext.Provider>
    );
}