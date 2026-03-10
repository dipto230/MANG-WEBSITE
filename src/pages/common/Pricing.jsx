
import React, { useState } from "react";
import Footer from "../../components/student/Footer";
import { useNavigate } from "react-router-dom";
import LegacyInquirySection from "./LegacyInquirySection";
import AboutPreview from "./AboutPreview";
import CallToAction from "../../components/student/CallToAction";
import ContactPreview from "./ContactPreview";

const Pricing = () => {

const navigate = useNavigate();
const [category,setCategory] = useState("web");

const pricingData = {

web:[
{
title:"Basic Website",
price:"$180",
features:[
"1–3 page website design",
"Responsive mobile-friendly layout",
"Basic UI design & clean layout",
"Contact form integration",
"Social media links integration",
"Basic SEO setup",
"Speed optimization",
"SSL security setup",
"Website deployment"
]
},

{
title:"Professional Website",
price:"$450+",
features:[
"5–8 page professional website",
"Custom UI / UX design",
"Mobile & tablet responsive design",
"CMS integration (WordPress or similar)",
"Blog setup",
"Advanced contact forms",
"SEO optimization",
"Speed optimization & security setup",
"Google Analytics integration",
"Social media integration"
]
},

{
title:"Premium Website",
price:"$1200+",
features:[
"Fully custom website development",
"Advanced UI / UX design",
"E-commerce functionality",
"Payment gateway integration",
"Advanced SEO optimization",
"Custom animations & interactive elements",
"High-performance speed optimization",
"Security & backup system",
"CMS dashboard for content management"
]
}
],

graphic:[
{
title:"Basic Graphic Design",
price:"$60",
features:[
"Social media post design",
"Instagram / Facebook banners",
"Simple logo design",
"Poster or flyer design",
"Basic photo editing",
"Typography & layout design",
"High-quality PNG / JPG export"
]
},

{
title:"Professional Graphic",
price:"$180+",
features:[
"Professional logo design",
"Brand color & typography selection",
"Social media campaign design",
"Brochure & flyer design",
"Website banner design",
"Product promotion graphics",
"Packaging design",
"Advertisement design",
"YouTube thumbnail design",
"Presentation design"
]
},

{
title:"Brand Identity Design",
price:"$500+",
features:[
"Complete brand identity design",
"Premium logo design",
"Brand color palette & typography",
"Business card design",
"Social media brand kit",
"Marketing material design",
"Brand guidelines document",
"UI / UX design",
"Merchandise design",
"Book cover design",
"Infographic design"
]
}
],

VFX:[
{
title:"Basic VFX",
price:"$150",
features:[
"Green screen / chroma key removal",
"Basic compositing",
"Simple visual effects (smoke, fire, light leaks)",
"Object removal / cleanup",
"Screen replacement",
"Basic motion tracking",
"Color correction",
"HD 1080p render"
]
},

{
title:"Professional VFX",
price:"$400+",
features:[
"Advanced compositing",
"Motion tracking & match moving",
"3D camera tracking",
"Motion graphics integration",
"Advanced effects (explosions, particles)",
"Environment enhancements",
"Professional color grading",
"Sound sync for effects",
"4K Ultra HD render"
]
},

{
title:"Film Level VFX",
price:"$900+",
features:[
"Cinematic VFX production",
"Hollywood-style compositing",
"Advanced 3D VFX integration",
"CGI elements integration",
"Advanced particle simulations",
"Digital environment creation",
"Advanced lighting & shadows",
"High-end color grading",
"Cinema quality 4K / 6K render"
]
}
],

marketing:[
{
title:"Basic Marketing",
price:"$120",
features:[
"Social media account setup & optimization",
"Profile branding (bio, highlights, page design)",
"Content planning & posting (8–12 posts per month)",
"Basic hashtag research & strategy",
"Caption writing for posts",
"Audience engagement (likes, comments, replies)",
"Basic brand awareness strategy",
"Monthly performance report",
"Content scheduling & management"
]
},

{
title:"Professional Marketing",
price:"$350+",
features:[
"Social media management",
"Content creation & graphic design for posts",
"Content scheduling (16–20 posts per month)",
"Advanced hashtag strategy & audience targeting",
"Social media advertising setup",
"Marketing campaign planning",
"Audience engagement & community management",
"Competitor research & market analysis",
"Performance tracking & analytics report"
]
},

{
title:"Premium Marketing",
price:"$900+",
features:[
"Full digital marketing strategy",
"Multi-platform social media management",
"High-quality content creation (graphics + videos)",
"Facebook, Instagram & Google Ads campaigns",
"Advanced audience targeting & retargeting",
"SEO optimization strategy for brand growth",
"Influencer collaboration strategy",
"Conversion optimization for campaigns",
"Detailed analytics & performance reports"
]
}
],

animation:[

     {
      title: "Basic Animation",
      price: "$120",
      features: [
        "Simple 2D animation",
        "Logo animation / intro animation",
        "Text animation & motion titles",
        "Basic transitions & effects",
        "Social media animation videos",
        "Background music integration",
        "HD 1080p render",
      ],
      best: "Instagram reels, YouTube intros, social media content",
    },

    {
      title: "Professional Animation",
      price: "$350+",
      featured: true,
      features: [
        "Advanced 2D animation",
        "Motion graphics animation",
        "Explainer video animation",
        "Character animation (basic)",
        "Animated infographics",
        "Storyboard planning",
        "Voice-over sync & sound effects",
        "Smooth transitions & effects",
        "4K Ultra HD render",
      ],
      best: "YouTube videos, brand marketing, business presentations",
    },

    {
      title: "Premium Animation",
      price: "$900+",
      features: [
        "High-end 2D / 3D animation",
        "Cinematic animation production",
        "Advanced character animation",
        "3D elements & environment",
        "Complex motion graphics",
        "Full storytelling animation",
        "Professional voice-over",
        "Advanced sound design",
        "Cinema quality 4K / 6K render",
      ],
      best: "Advertisements, films, music videos, brand storytelling",
    },




]

};

return (

<>
<section className="py-24 bg-gray-50 px-6">

<div className="max-w-7xl mx-auto">

<div className="text-center mb-20">

<h1 className="text-5xl font-bold mb-6">
Build Your Digital Future 🚀
</h1>

<p className="text-gray-600 max-w-2xl mx-auto text-lg">
We provide powerful digital services designed to help businesses
grow faster. Choose a category and explore our transparent pricing.
</p>

</div>

<div className="grid md:grid-cols-4 gap-10">

<div className="bg-white p-6 rounded-2xl shadow-md h-fit">

<h3 className="font-semibold text-lg mb-4">
Service Categories
</h3>

<div className="flex flex-col gap-3">

{["web","graphic","VFX & 3D Modeling","marketing","animation", "videoEditing"].map((cat)=>(
<button
key={cat}
onClick={()=>setCategory(cat)}
className={`text-left px-4 py-2 rounded-lg capitalize transition
${category===cat
? "bg-blue-600 text-white"
: "hover:bg-gray-100"}
`}
>
{cat}
</button>
))}

</div>

</div>

<div className="md:col-span-3 grid md:grid-cols-3 gap-8">

{pricingData[category].map((plan,index)=>(

<div
key={index}
className="bg-white border rounded-3xl p-8 shadow-md hover:shadow-2xl transition group"
>

<h3 className="text-xl font-semibold mb-2">
{plan.title}
</h3>

<h4 className="text-4xl font-bold text-blue-600 mb-6">
{plan.price}
</h4>

<ul className="space-y-3 text-gray-600 mb-8">

{plan.features.map((f,i)=>(
<li key={i}>✔ {f}</li>
))}

</ul>

<button
onClick={()=>navigate("/contact")}
className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
>
Start Project
</button>

</div>

))}

</div>

</div>

</div>

</section>
        {/* ================= FEATURED SERVICES ================= */}

<section className="py-24 bg-white px-6">

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-14">
Our Core Services
</h2>

<div className="grid md:grid-cols-4 gap-8">

{/* Web Development */}

<div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

<div className="text-4xl mb-4">💻</div>

<h3 className="text-xl font-semibold mb-3">
Web Development
</h3>

<p className="text-gray-600 text-sm mb-5">
Modern responsive websites built with the latest technologies to help your business grow online.
</p>

<button
onClick={()=>navigate("/services")}
className="text-blue-600 font-medium hover:underline"
>
Explore →
</button>

</div>


{/* Graphic Design */}

<div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

<div className="text-4xl mb-4">🎨</div>

<h3 className="text-xl font-semibold mb-3">
Graphic Design
</h3>

<p className="text-gray-600 text-sm mb-5">
Creative branding, marketing visuals, and professional graphics to make your brand stand out.
</p>

<button
onClick={()=>navigate("/services")}
className="text-blue-600 font-medium hover:underline"
>
Explore →
</button>

</div>


{/* Digital Marketing */}

<div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

<div className="text-4xl mb-4">📈</div>

<h3 className="text-xl font-semibold mb-3">
Digital Marketing
</h3>

<p className="text-gray-600 text-sm mb-5">
Grow your business with social media marketing, SEO strategies, and targeted advertising campaigns.
</p>

<button
onClick={()=>navigate("/services")}
className="text-blue-600 font-medium hover:underline"
>
Explore →
</button>

</div>


{/* Animation & VFX */}

<div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center">

<div className="text-4xl mb-4">🎬</div>

<h3 className="text-xl font-semibold mb-3">
Animation & VFX
</h3>

<p className="text-gray-600 text-sm mb-5">
Professional animations and visual effects for ads, films, marketing videos, and storytelling.
</p>

<button
onClick={()=>navigate("/services")}
className="text-blue-600 font-medium hover:underline"
>
Explore →
</button>

</div>

</div>

</div>

        </section>
        {/* ================= TRUSTED BRANDS ================= */}

<section className="py-20 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h3 className="text-2xl font-semibold text-gray-700 mb-10">
Trusted by Leading Brands
</h3>

<div className="flex flex-wrap justify-center items-center gap-10 opacity-70">

<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/google-1.svg" />
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" />
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" />
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" />
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" />

</div>

</div>

        </section>
        {/* ================= TESTIMONIALS ================= */}

<section className="py-24 px-6 bg-gray-50">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-14">
What Our Clients Say
</h2>

<div className="grid md:grid-cols-3 gap-10">

{[
{
name: "Sarah Johnson",
role: "Startup Founder",
image: "https://randomuser.me/api/portraits/women/44.jpg",
text: "Amazing service and very professional team. They helped our business grow significantly."
},
{
name: "Michael Lee",
role: "Marketing Director",
image: "https://randomuser.me/api/portraits/men/32.jpg",
text: "Highly recommend them! The quality of work and support is outstanding."
},
{
name: "David Smith",
role: "Product Manager",
image: "https://randomuser.me/api/portraits/men/46.jpg",
text: "They transformed our digital presence. Truly a fantastic experience working with them."
}
].map((t,i)=>(

<div key={i} className="p-8 rounded-2xl shadow-md bg-white">

<img
src={t.image}
className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
/>

<p className="text-gray-600 italic">
"{t.text}"
</p>

<h4 className="mt-6 font-semibold">
{t.name}
</h4>

<span className="text-sm text-gray-500">
{t.role}
</span>

</div>

))}

</div>

</div>

        </section> 
        <LegacyInquirySection />
        <AboutPreview />
        <CallToAction />
        <ContactPreview/>

<Footer/>

</>

);

};

export default Pricing;

