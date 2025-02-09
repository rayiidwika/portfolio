import { PiStudent, PiStudentBold } from "react-icons/pi";

export default function About() {
    return (
    <section id="about">
        <div className="min-h-screen max-w-screen-lg m-auto flex flex-col justify-center">

            <h1 className="text-center text-4xl font-bold mb-8" >About Me</h1>
            
           <p className="text-justify">
           Nama saya Rayi Dwika Nugraha biasa di panggil Rayii. Saya seorang Mahasiswa yang sedang menempuh perkuliahan di Politeknik LP3I Kampus Tasikmalaya dan mengambil jurusan Menejemen Informatika. Saat ini saya sedang belajar hal-hal seputar ilmu komputer khususnya di bidang Web Programming. Dan cita-cita saya bekerja sebagai Frontend Developer.</p>
            
            <div className='mt-12 flex gap-8 flex-col md:flex-row'>
            <div className='md:w-1/2'>
                <h2 className={`text-3xl font-bold text-slate-100`}>Education</h2>
                <div className='border-l-2 border-orange-700 px-6 relative mt-5 pb-5 mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><PiStudentBold /></div>
                    <h4 className={`text-slate-100 text-xl font-semibold`}>SDN Dadaha</h4>
                    <p className='text-sm'>2012 - 2018</p>
                </div>

                <div className='border-l-2 border-orange-700 px-6 relative pb-5 mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><PiStudentBold /></div>
                    <h4 className={`text-slate-100 text-xl font-semibold`}>SMPN 2 Sariwangi</h4>
                    <p className='text-sm'>2018 - 2021</p>
                </div>

                <div className='border-l-2 border-orange-700 px-6 relative mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center '><PiStudentBold /></div>
                    <h4 className={`text-slate-100 text-xl font-semibold`}>SMAN 5 Tasikmalaya</h4>
                    <p>Science</p>
                    <p className='text-sm'>2021 - 2024</p>
                </div>
                <div className='border-l-2 border-orange-700 px-6 relative mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center '><PiStudentBold /></div>
                    <h4 className={`text-slate-100 text-xl font-semibold`}>Politeknik LP3I Kampus Tasikmalaya</h4>
                    <p>Manajemen Informatika</p>
                    <p className='text-sm'>2024 - Now</p>
                </div>
            </div>
            <div className='text-9xl flex justify-center items-center md:w-1/2 text-orange-600  py-8 border-4 rounded-md border-orange-600'><PiStudent /></div>
        </div>                       
        </div>
    </section>
    )
}