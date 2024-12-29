// import CharDhamCard from "./CharDhamCard";
// const PrayingSection = () => {
//   return (
//     <section className="p-10 flex flex-col gap-10">
//       <h1>Praying Concept depends on Timezone.</h1>
//       <div className="card-container flex gap-10 items-center justify-center">
//         <CharDhamCard
//           src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
//           templeName={"द्वारकाधीश मंदिर"}
//           loc={"Rameshwaram, Tamil nadu"}
//           otherInfo={"Deity : Lord Krishnas"}
//         />
//         <CharDhamCard
//           src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
//           templeName={"द्वारकाधीश मंदिर"}
//           loc={"Rameshwaram, Tamil nadu"}
//           otherInfo={"Deity : Lord Krishnas"}
//         />
//         <CharDhamCard
//           src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
//           templeName={"द्वारकाधीश मंदिर"}
//           loc={"Rameshwaram, Tamil nadu"}
//           otherInfo={"Deity : Lord Krishnas"}
//         />
//       </div>
//     </section>
//   );
// };

// export default PrayingSection;
import CharDhamCard from "./CharDhamCard";
const PrayingSection = () => {
  return (
    // <section className="p-6 flex flex-column gap-20" style={{backgroundColor:'#e6eef6'}}>
    //   <div className="flex flex-column justify-center items-center">
    //     <h1 className="text-3xl font-bold">Praying Concept depends on Timezone.</h1>
    //     <p className="text-xl">Prayer is considered to be an integral part of the Hindu religion; it is practiced during Hindu worship and is an expression of devotion. The chanting of mantras is the most popular form of worship in Hinduism. </p>
    //   </div>
    //   <div className="card-container flex items-center justify-around">
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"द्वारकाधीश मंदिर"}
    //       loc={"Rameshwaram, Tamil nadu"}
    //       otherInfo={"Deity : Lord Krishnas"}
    //     />
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"द्वारकाधीश मंदिर"}
    //       loc={"Rameshwaram, Tamil nadu"}
    //       otherInfo={"Deity : Lord Krishnas"}
    //     />
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"द्वारकाधीश मंदिर"}
    //       loc={"Rameshwaram, Tamil nadu"}
    //       otherInfo={"Deity : Lord Krishnas"}
    //     />

    //   </div>
    // </section>

    <section className="bg-[#F9F5FF] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-4xl font-medium md:text-5xl">
          Daily Hindu <span className="text-[#6C5CE7]">Prayer Rituals</span>
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          Embrace the divine through these essential Hindu prayers for morning, evening, and night.
          Connect with the cosmic energy and find inner peace in your daily spiritual practice.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Morning Prayers */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex gap-3">
              <div className="rounded-lg bg-gray-100 p-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="rounded-lg bg-[#6C5CE7] bg-opacity-10 p-2">
                <svg className="h-6 w-6 text-[#6C5CE7]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-medium">Morning Prayers</h3>
            <ul className="text-left text-gray-600 space-y-2 mb-4">
              <li>• Surya Namaskar (Sun Salutation)</li>
              <li>• Gayatri Mantra</li>
              <li>• Saraswati Vandana (for knowledge)</li>
              <li>• Shiva Panchakshara Stotram</li>
            </ul>
            <button className="mt-4 rounded-md bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5A4ED1] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2">
              Explore Morning Rituals
            </button>
          </div>

          {/* Card 2: Evening Prayers */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex gap-3">
              <div className="rounded-lg bg-gray-100 p-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10V2M12 10L17 5M12 10L7 5M4 15H20M4 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="rounded-lg bg-[#6C5CE7] bg-opacity-10 p-2">
                <svg className="h-6 w-6 text-[#6C5CE7]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-medium">Evening Prayers</h3>
            <ul className="text-left text-gray-600 space-y-2 mb-4">
              <li>• Sandhya Vandanam</li>
              <li>• Vishnu Sahasranama</li>
              <li>• Hanuman Chalisa</li>
              <li>• Durga Saptashati</li>
            </ul>
            <button className="mt-4 rounded-md bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5A4ED1] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2">
              Explore Evening Rituals
            </button>
          </div>

          {/* Card 3: Night Prayers */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex gap-3">
              <div className="rounded-lg bg-gray-100 p-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.9984 13.3997C12.7728 13.3997 13.3984 12.774 13.3984 11.9997C13.3984 11.2253 12.7728 10.5997 11.9984 10.5997C11.2241 10.5997 10.5984 11.2253 10.5984 11.9997C10.5984 12.774 11.2241 13.3997 11.9984 13.3997Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="rounded-lg bg-[#6C5CE7] bg-opacity-10 p-2">
                <svg className="h-6 w-6 text-[#6C5CE7]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-medium">Night Prayers</h3>
            <ul className="text-left text-gray-600 space-y-2 mb-4">
              <li>• Shri Krishna Sharanam Mamah</li>
              <li>• Om Shanti Mantra</li>
              <li>• Shiva Tandava Stotram</li>
              <li>• Brahma Muhurta Meditation</li>
            </ul>
            <button className="mt-4 rounded-md bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5A4ED1] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2">
              Explore Night Rituals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayingSection;

