import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toki.mn Clone</title>
      </Head>
      <div className="min-h-screen bg-[#fef1d6]">
        <nav className="w-full fixed flex justify-between items-center px-8 py-4 shadow-sm bg-white">
          <div className="flex items-center gap-2">
            <img src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" className="h-10 w-auto" />
           
          </div>
          <p className=" md:flex gap-8 text-gray-800 font-medium">
            <p className="hover:text-yellow-400">Үйлчилгээ</p>
            <p className="hover:text-yellow-400">Давуу тал</p>
            <p className="hover:text-yellow-400">Мэдээ</p>
            <p className="hover:text-yellow-400">Хамтран ажиллах</p>
          </p>
        </nav>

      
        <div className="flex flex-col items-center justify-center text-center py-16 px-4">
          <h1 className="text-2xl md:text-4xl text-gray-800 mb-8">
            Хэрэгцээт үйлчилгээг нэг дороос…
          </h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" className="" />
          </div>
          <div className="flex gap-4 mt-10">
            <a href="">
              <img src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png" className="h-12" />
            </a>
            <a href="">
              <img src="https://www.toki.mn/wp-content/uploads/2021/01/android.png" className="h-12" />
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="flex justify-center md:justify-start w-full md:w-1/2">
      <img 
        src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png" 
        className=""
      />
    </div>
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Toki Service</h2>
      <p className="text-lg text-gray-800 ">
        Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, 
        цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
      </p>
    </div>
  </div>
</div>
<div className="min-h-screen bg-[#fef1d6] flex items-center justify-center px-6 py-16">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
  <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 flex items-end justify-end">Toki Pay</h2>
      <p className="text-lg text-gray-800 flex items-end justify-end">
      Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.


      </p>
    </div>
    <div className="flex justify-center md:justify-start w-full md:w-1/2">
      <img 
        src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png" 
        className=""
      />
    </div>
    
  </div>
</div>
<div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="flex justify-center md:justify-start w-full md:w-1/2">
      <img 
        src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png" 
        className="w-full h-96"
      />
    </div>
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Toki Shop</h2>
      <p className="text-lg text-gray-800 ">
      Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
      </p>
    </div>
  </div>
</div>
<div className="min-h-96 bg-white flex items-center justify-center px-6 py-16">
  <div className=" w-full flex flex-col justify-center items-center">
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Toki апп өдөр бүр танд тусална</h2>
      <p className="text-lg text-gray-800 ">
      Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
      </p>
    </div>
  </div>
</div>
<div className="min-h-40 bg-[#fef1d6] flex items-center justify-center px-6 py-16">
  <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center">
    
     <button className="bg-yellow-400 w-48 h-12 rounded-3xl text-white font-bold">
     Давуу тал
     </button>
  
  </div>
</div>
    </>
  );
}