import React, { useState } from "react";
import Footer from "../../components/student/Footer";
import { useNavigate } from "react-router-dom";

const Pricing = () => {

const navigate = useNavigate()

const [category,setCategory] = useState("web")

const pricingData = {

web:[
{
title:"Starter Website",
price:"$299",
features:["5 Pages","Responsive Design","Basic SEO","Contact Form"]
},
{
title:"Business Website",
price:"$699",
features:["10 Pages","Custom UI","CMS Integration","Advanced SEO"]
},
{
title:"Custom Web App",
price:"$1499+",
features:["Unlimited Pages","Database","Payment Gateway","Custom Features"]
}
],

graphic:[
{
title:"Logo Design",
price:"$80",
features:["3 Concepts","High Resolution","Source Files"]
},
{
title:"Brand Identity",
price:"$250+",
features:["Logo","Color System","Typography"]
},
{
title:"Full Branding",
price:"$800+",
features:["Brand Guide","Logo","Social Assets"]
}
],

vfx:[
{
title:"Basic VFX",
price:"$150",
features:["Short Video VFX","Color Grading","Basic Effects"]
},
{
title:"Professional VFX",
price:"$400+",
features:["Motion Graphics","Advanced Effects","4K Render"]
},
{
title:"Film Level VFX",
price:"$900+",
features:["Cinematic Effects","Compositing","High End Editing"]
}
],

marketing:[
{
title:"SEO Package",
price:"$200/mo",
features:["Keyword Research","On Page SEO","Technical SEO"]
},
{
title:"Social Media",
price:"$300/mo",
features:["Content Plan","Post Design","Analytics"]
},
{
title:"Full Marketing",
price:"$800/mo",
features:["SEO","Ads Management","Social Media"]
}
],

animation:[
{
title:"2D Animation",
price:"$200+",
features:["Character Animation","Story Animation"]
},
{
title:"3D Animation",
price:"$500+",
features:["3D Models","Motion Animation"]
},
{
title:"Full Animated Video",
price:"$1200+",
features:["Storyboard","Voice Over","Rendering"]
}
]

}

return (

<>
<section className="py-24 bg-gray-50 px-6">

<div className="max-w-7xl mx-auto">

{/* ===== TOP HEADER ===== */}

<div className="text-center mb-20">

<h1 className="text-5xl font-bold mb-6">
Build Your Digital Future 🚀
</h1>

<p className="text-gray-600 max-w-2xl mx-auto text-lg">
We provide powerful digital services designed to help businesses
grow faster. Choose a category and explore our transparent pricing.
</p>

</div>


{/* ===== MAIN GRID ===== */}

<div className="grid md:grid-cols-4 gap-10">

{/* ===== CATEGORY MENU ===== */}

<div className="bg-white p-6 rounded-2xl shadow-md h-fit">

<h3 className="font-semibold text-lg mb-4">
Service Categories
</h3>

<div className="flex flex-col gap-3">

{["web","graphic","vfx","marketing","animation"].map((cat)=>(
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


{/* ===== PRICING CARDS ===== */}

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

<Footer/>
</>

)

}

export default Pricing