"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import lagana from "./image/IMG_4130.png";
import { motion, AnimatePresence } from "framer-motion";
import recenzija1 from "./image/IMG_6155.jpg";
import recenzija2 from "./image/IMG_6927.png";
import recenzija3 from "./image/IMG_6928.png";
import recenzija4 from "./image/IMG_6929.png";
import recenzija5 from "./image/IMG_6930.png";
import recenzija6 from "./image/IMG_6931.png";
import { CheckCircle, Clock } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const MotionImage = motion(Image);
  const reviews = [
    {
      name: "Milos",
      img: recenzija6,
      desc: "Zarada u proteklih mesec dana od ove grupe!",
    },
    {
      name: "Devla",
      img: recenzija5,
      desc: "Profit od prodatih 2 para patika!",
    },
    {
      name: "Devla",
      img: recenzija4,
      desc: "Profit od premium grupe u julu brat @Dzonce  ispostovao❤️",
    },
    {
      name: "Isusic",
      img: recenzija3,
      desc: "Profit iz premium grupe u julu , a nisam ulozio ni dinara. Sve pakete je slao @Dzonce mojim kupcima i posle meni prosledjivao moj deo, tako da moze da se zaradi i da se ne ulozi uz pomoc premium grupe i admina. Hvala puno",
    },
    {
      name: "reseling rs",
      img: recenzija2,
      desc: "Počeo sa 0€, pronašao kupce kroz Instagram i sada svakog meseca diže čistu zaradu.",
    },
    {
      name: "Dejan",
      img: recenzija1,
      desc: "Radio sam klasičan posao od 9 do 5 i bio sam skeptičan. Posle prvog meseca u grupi shvatio sam da reselling može da donese više nego plata. Sada mi je ovo glavni izvor prihoda.",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" select-none">
      <div id="Home" className="sticky top-0 z-50 bg-neutral-900 shadow-md">
        <div className="p-2 flex flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={lagana}
              alt="logo"
              className="rounded-md m-2 cursor-pointer hover:scale-110 w-6 sm:w-10"
              onClick={() => scrollToTop()}
            />
          </motion.div>
          <div className="hidden md:flex justify-center text-red-400">
            {["informacije", "karijera", "recenzije", "uclani"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`text-sm sm:text-lg font-bold ml-10 cursor-pointer hover:text-red-300 transition-all duration-200 hover:scale-110 ${
                    i === 0 ? "ml-0" : ""
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item === "uclani"
                    ? "Pridružite se!"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.div>
              )
            )}
          </div>
          <div className="hidden md:flex flex-row">
            <a href="https://www.instagram.com/lagana.lova" target="_blank">
              <motion.div
                className="text-white mr-5 text-lg cursor-pointer hover:scale-110"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.div>
            </a>
            <a href="https://www.tiktok.com/@lagana.lova" target="_blank">
              <motion.div
                className="text-white text-lg cursor-pointer hover:scale-110"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FontAwesomeIcon icon={faTiktok} />
              </motion.div>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-white md:text-4xl text-xl cursor-pointer absolute right-2 z-50"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-40 flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="flex-1 bg-black bg-opacity-50"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="w-2/3 h-full bg-neutral-900 shadow-lg flex flex-col items-start p-6"
                >
                  {["informacije", "karijera", "recenzije", "uclani"].map(
                    (item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-lg font-bold mb-6 text-red-400 cursor-pointer hover:text-red-300"
                        onClick={() => {
                          scrollToSection(item);
                          setIsOpen(false);
                        }}
                      >
                        {item === "uclani"
                          ? "Pridružite se!"
                          : item.charAt(0).toUpperCase() + item.slice(1)}
                      </motion.div>
                    )
                  )}
                  <div className="flex mt-auto gap-6">
                    <a
                      href="https://www.instagram.com/lagana.lova"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="text-white text-2xl"
                        icon={faInstagram}
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com/@lagana.lova"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="text-white text-2xl"
                        icon={faTiktok}
                      />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center items-center p-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg flex flex-wrap justify-center animate-pulse font-[Quicksand]">
            {"Lagana Lova".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {char === " " ? "" : char}
              </motion.span>
            ))}
          </h1>
          <div className="overflow-hidden rounded-full shadow-2xl hover:scale-105 transition-transform duration-500">
            <MotionImage
              src={lagana}
              alt="Lagana Lova"
              width={400}
              height={400}
              className="rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
          <motion.button
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-red-400 to-red-500 text-gray-400 px-8 py-3 rounded-full font-semibold shadow-lg hover:from-red-500 hover:to-red-600 hover:scale-115 transition-all duration-300"
            onClick={() => scrollToSection("informacije")}
          >
            Saznaj Više!
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 dark:text-gray-400 max-w-xl text-center text-lg md:text-xl leading-relaxed mt-4 animate-fadeIn"
          >
            Otkrij kako da upravljaš svojim novcem na pametan, jednostavan i
            lagan način 💡
          </motion.p>
        </div>
      </div>
      <div
        id="informacije"
        className="bg-neutral-900 min-h-screen text-gray-300 py-20 px-4"
      >
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-2xl sm:text-4xl font-serif font-bold text-red-400"
          >
            Informacije o našem programu
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-3xl mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ✨ Dobrodošao na zvaničnu stranicu{" "}
            <motion.span
              className="text-gray-300 underline font-bold inline-block"
              animate={{ scale: [1, 1.2, 1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              LaganaLova💸
            </motion.span>{" "}
            zajednice! Ovde možeš da pogledaš uspehe naših članova, iskustva i
            utiske. 🚀 Pridruži se ekipi i zakorači u svet zarade zajedno sa
            nama!
          </motion.p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {[
            {
              title: "Članovi!",
              text: "Naša zajednica broji 500+ aktivnih članova!",
            },
            {
              title: "Balkanski Dobavljači",
              text: "Isti kvalitet kao u prodavnici, ali 4x jeftinije. Dostava za 1 dan!",
            },
            {
              title: "Strani Dobavljači",
              text: "Vrhunski kvalitet 1:1, cena i do 10x niža, dostava 10–15 dana.",
            },
            {
              title: "Web Usluge",
              text: "U našem programu ti nudimo logo i web dizajnera.",
            },
            {
              title: "Digitalni Proizvodi",
              text: "Netflix, Spotify, YouTube Premium, Discord Nitro, CapCut Pro – proveren i siguran pristup!",
            },
            {
              title: "Profesionalne Slike",
              text: "Rezolucija koja oduzima dah – biraj omiljene slike i uživaj u kvalitetu.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="hover:scale-105 transition-all duration-200 cursor-pointer border rounded-lg text-red-500 shadow-lg bg-neutral-800 hover:bg-red-500 hover:text-white p-6 w-full max-w-xs sm:max-w-sm h-44 flex flex-col justify-center items-center"
            >
              <motion.div className="text-xl font-bold mb-2 text-gray-300">
                {item.title}
              </motion.div>
              <div className="text-sm sm:text-base font-semibold text-center">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
            🚀 Mini kurs: Kreni sa{" "}
            <span className="text-red-500">Reselling Biznisom</span>
          </h3>
          <div className="text-sm sm:text-lg max-w-3xl mx-auto space-y-4 border rounded-lg p-6 sm:p-10 border-gray-500 bg-neutral-800">
            {[
              {
                title: "Plaćanje rešeno lako",
                text: "uplata preko uplatnice ili keš na ruke prilikom preuzimanja paketa.",
              },
              {
                title: "Dobavljači svuda oko tebe",
                text: "nauči da koristiš (balkanske 1 dan), (evropske 3–7 dana), (azijske 7–14 dana) izvore.",
              },
              {
                title: "Biraj pametno proizvode",
                text: "otkri šta se najviše traži i gde se krije najveća zarada.",
              },
              {
                title: "Moć oglasa",
                text: "20+ načina kako da napraviš objave koje privlače kupce kao magnet.",
              },
              {
                title: "Prve prodaje brže nego što misliš",
                text: "taktike kako da odmah dođeš do kupaca i stvoriš prve zarade.",
              },
              {
                title: "Brend koji ostaje u glavi",
                text: "napravi svoj online shop i ime koje ljudi pamte i preporučuju.",
              },
              {
                title: "Marketing level PRO",
                text: "nauči kako da na TikToku, Instagramu i mrežama lansiraš proizvod u viral.",
              },
              {
                title: "Postani car prodaje",
                text: "ovladaj tehnikama zatvaranja prodaje i pretvori znanje u ozbiljan profit.",
              },
              {
                title: "Posebne pogodnosti",
                text: "povoljnija nabavka, brža dostava i veća marža samo za tebe.",
              },
              {
                title: "Pametno trošenje profita",
                text: "gde uložiti prve pare da bi se tvoj biznis širio bez limita.",
              },
              {
                title: "Pravi preduzetnik",
                text: "kako da pokreneš legalan posao i gradiš dugoročnu priču.",
              },
            ].map((item, i) => (
              <div key={i}>
                ⭕ <span className="text-red-400 font-bold">{item.title}</span>{" "}
                – {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("uclani")}
            className="hover:scale-110 transition-all duration-200 bg-red-400 text-neutral-900 font-bold text-lg sm:text-xl px-8 py-3 rounded-lg shadow-md hover:bg-neutral-700 hover:text-red-400"
          >
            Pridruži se već danas!
          </button>
        </div>
      </div>

      <motion.div
        id="karijera"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <div className="flex justify-center flex-col text-center">
          <div className="text-white text-3xl mt-20 font-serif">
            Moja Karijera
          </div>
          <div className="flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-900 text-white w-full max-w-2xl mt-12 p-6 rounded-2xl shadow-xl border border-neutral-700 mb-32"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-bold mb-4 text-red-400"
              >
                Kako je sve počelo 🚀
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg leading-relaxed text-neutral-200"
              >
                Krenuo sam sasvim spontano – naručio sam jednu Diesel torbicu i
                Yeezy patike iz Kine, više da probam fazon nego da zaradim.
                Nisam ni slutio da će mi to promeniti život. Kad sam video da
                ljudi traže i kupuju takve stvari, odmah sam krenuo ozbiljnije.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-4 text-neutral-300 leading-relaxed"
              >
                Prvo sam radio sa kineskim dobavljačima, ali kako je išla veća
                potražnja, otkrio sam i balkanske kontakte koji rade dostavu za
                24h. Tu je krenuo pravi boom – više nisam morao da čekam po dve
                nedelje, već sam kupcima isporučivao proizvode za dan. To mi je
                dalo ogromnu prednost na tržištu.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-4 text-neutral-300 leading-relaxed"
              >
                Nakon toga sam otvorio Instagram za patike, pa još jedan za
                parfeme. Stranice su krenule da rastu, ljudi su sami dolazili,
                pitali, preporučivali dalje. Zarada je rasla iz meseca u mesec,
                a ono što je krenulo sa jednom torbicom i jednim parom patika,
                pretvorilo se u ozbiljan biznis.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="mt-4 text-neutral-300 leading-relaxed"
              >
                Danas od ovog posla zarađujem mnogo više nego što sam mogao da
                zamislim, a najbolji deo je što sve to može da radi svako ko zna
                prave fore. Zato sam odlučio da napravim grupu u kojoj ću
                podeliti svoje dobavljače i naučiti vas kako da plasirate
                proizvode tako da se prodaju.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="mt-6 p-4 bg-neutral-800 rounded-xl border border-red-500 shadow-lg text-center"
              >
                <p className="text-red-400 font-semibold text-lg">
                  📌 Bitna stvar – moguće je krenuti i bez početnog kapitala.
                </p>
                <p className="text-neutral-200 mt-2">
                  Vi nađete kupca, mi šaljemo proizvod direktno njemu po ceni za
                  koju ste se dogovorili, a vama ide vaš deo profita. Ako sam ja
                  uspeo da krenem ni iz čega – verujte da možete i vi. 💡
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        id="recenzije"
        className="bg-neutral-900 min-h-screen text-gray-300 py-20 px-4"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-serif animate-bounce mb-12">
            Recenzije
          </h2>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-10">
              Zarade Članova 💸
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-400 text-black rounded-2xl shadow-xl border border-gray-300 w-72 h-96 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-4 flex flex-col items-center text-center h-full">
                    <div className="rounded-xl overflow-hidden w-full h-48 sm:h-48 md:h-48">
                      <Image
                        src={r.img}
                        alt={r.name}
                        width={320}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-bold mt-4">
                      {r.desc}
                    </p>
                    <h4 className="text-base sm:text-lg md:text-xl font-mono mt-3">
                      - {r.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div id="uclani" className="py-20 px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold animate-bounce text-2xl sm:text-3xl mt-10 text-center">
            Pridruži se Programu!
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 py-12 w-full max-w-6xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-800 border-2 border-red-400 rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col justify-between mx-auto text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
                Free Grupa
              </h3>
              <ul className="space-y-3 text-neutral-300 text-sm sm:text-base">
                <li className="flex items-center gap-2 font-semibold">
                  <Clock className="text-red-400" /> Sporiji odgovori
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <CheckCircle className="text-red-400" /> Osnovne informacije
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <CheckCircle className="text-red-400" /> Pristup zajednici
                </li>
              </ul>
              <div className="mt-6">
                <a href="https://discord.gg/vCF7HxNSnW">
                  <button className="w-full py-3 rounded-xl border-2 border-red-400 text-red-400 font-bold hover:bg-red-400 hover:text-black transition">
                    Uđi besplatno
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-red-400 border-2 border-red-500 rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col justify-between mx-auto text-black"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Premium Grupa 🚀
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="text-white" /> Brzi odgovori 24/7
                </li>
                <li className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="text-white" /> Direktni kontakti
                  dobavljača
                </li>
                <li className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="text-white" /> Detaljne strategije
                  prodaje
                </li>
                <li className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="text-white" /> Mentoring i podrška
                </li>
                <li className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="text-white" /> Ekskluzivni proizvodi
                  pre svih
                </li>
                <li className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="text-white" /> Dm za Uplatu pre svih
                </li>
              </ul>
              <div className="mt-6 flex flex-col items-center gap-4">
                <a
                  href="https://www.instagram.com/lagana.lova?igsh=MXduMjdqZmNxb3U3aw%3D%3D&utm_source=qr"
                  target="_blank"
                  className="cursor-default block w-full text-center border-2 border-neutral-900 px-6 py-3 rounded-xl text-white font-bold hover:bg-neutral-900 hover:text-white transition"
                >
                  <span>Pridruži se sada</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 text-gray-300 mt-20 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-red-400">Lagana Lova 💸</h2>
            <p className="max-w-sm text-gray-400">
              Pridruži se zajednici, uči od iskusnih resellera i poveži se sa
              ljudima koji žele da unaprede svoj biznis.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-red-400">Navigacija</h3>
              <a href="#informacije" className="hover:text-red-500 transition">
                Informacije
              </a>
              <a href="#karijera" className="hover:text-red-500 transition">
                Karijera
              </a>
              <a href="#recenzije" className="hover:text-red-500 transition">
                Recenzije
              </a>
              <a href="#pridruzi" className="hover:text-red-500 transition">
                Pridruži se
              </a>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-red-400">Društvene mreže</h3>
              <a
                href="https://www.instagram.com/lagana.lova?igsh=MXduMjdqZmNxb3U3aw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@lagana.lova?_t=ZM-8zO1scbJtLR&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                TikTok
              </a>
              <a
                href="mailto:jovanovicnikola137@gmail.com"
                className="hover:text-red-500 transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 pb-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lagana Lova. Sva prava zadržana.
        </div>
      </div>
    </div>
  );
}
