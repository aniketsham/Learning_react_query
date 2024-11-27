import { useState, useLayoutEffect,useRef, useEffect } from 'react';
import {toast} from 'react-toastify';
export const useWindowSize = () => {
    const [size, setSize] = useState({width:window.innerWidth,
        height:window.innerHeight,
        isMobile:window.innerWidth<768    
    }); 
     // Size is in pixels


    const handleResize = () => {
        setSize({width:window.innerWidth,
            height:window.innerHeight,
            isMobile:window.innerWidth<768});
    };

    // Similar to useEffect, but it fires synchronously after all DOM mutations.
    // Use this to read layout from the DOM and synchronously re-render.
    // Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
    
    useLayoutEffect(() => {
     
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // removes the event listener from the window when the component unmounts
        };
    }, []); 

    return size;
};


export const useScrollPosition=()=>{
    const [scrollPosition, setScrollPosition] = useState(0);

    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition
}



export const useIntersectionObserver = (options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.1 }) => { 

    const [isInView, setIsInView] = useState(false);
    const targetRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (!window.IntersectionObserver) return
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        // Cleanup observer on unmount
        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [options]);

    return { targetRef, isInView };


}


export const useFormValidation=()=>{
    const [formError, setFormError] = useState<string | null>(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    // Better to use useForm from react-hook-form more control and error control
    // like onTouched, onBLur, onChange, onSubmit and many more
    // zod also helps to provide a validation schema
    useEffect(() => {
        if (formError) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }, [formError]);

    return {formError,setFormError,isFormValid,setIsFormValid,submitting,setSubmitting}
}

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [message,setMessage]=useState<string>("")
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
            setMessage("Copied to clipboard")
        } catch (err) {
            console.error('Failed to copy text:', err);
            setIsCopied(false);
            setMessage("Failed to copy to clipboard")
        }
    };

    return { copyToClipboard, isCopied,message };
};

export const useToast=()=>{
    const showToast=(variant:"success"|"error",message:string)=>{

        if(variant==="success"){
            toast.success(message)
        }
        else{
            toast.error(message)
        }
    }

    return {showToast}
}