import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function PrimaryFeatures() {
  return (
    <section className="body-font bg-gradient-to-b from-blue-400 to-green-500 font-poppins">
      <div className="mx-auto flex flex-col items-center justify-center px-5 py-10 md:container md:py-10">
        <div className="w-full text-center lg:w-2/3">
          <AnimationOnScroll
            classNameInView={
              'opacity-100 translate-y-0 transition duration-[1s]'
            }
            classNameNotInView={'opacity-0 translate-y-10'}
          >
            <h1 className="title-font leading-wide mb-4 text-5xl font-semibold text-gray-900 sm:text-4xl md:mt-5 ">
              UNSERE GESCHICHTE
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
                <br />
              Björn Seibert (CEO und Gründer von BE-SCooTER®): <br />
              <br /> &quot;V2017 machte ich
              die Bekanntschaft mit einem &quot;elektrischen Tretroller&quot;,
              im Rahmen eines Ausfluges während meiner Kreuzfahrt durch den
              Orient. Man kann von Begeisterung auf den ersten Tritt sprechen.
              Jedenfalls war es ein tolles Feeling mit dem E-Scooter die
              Corniche von Doha entlang zu rollen. Der erste eigene
              elektrounterstützte Freund befand sich im Grunde bereits auf dem
              Postweg nach Hause. Zwei Jahre später, im Mai 2019, habe ich dann
              den ersten eigenen Store in Hohenahr-Erda eröffnet. Ob als
              Hilfsmittel auf dem entspannten Weg zur Arbeit (ohne
              Parkplatzsuche) oder nach einem stressigen Tag als
              &quot;Antrieb&quot; für eine erholsame Runde in unserem tollen
              Lahn-Dill-Bergland, dieser kleine elektrounterstützte Tretroller
              wird Dich überzeugen und elektrisieren. Inzwischen gibt es viele
              Angebote, die auf den ersten Blick interessant wirken, zahlreiche
              Stolpersteine lauern jedoch aktuell auf dem Weg zum eigenen
              E-Scooter. Meine Empfehlung: Komm bei uns vorbei und
              &quot;erfahre&quot; die extremen Unterschiede bei der von uns
              exklusiv angebotenen Probefahrt auf verschiedenen Modellen. Ich
              freue mich besonders, dass wir im Store tolle, qualitativ
              hochwertige und vor allem nachhaltig unschlagbare E-Scooter von
              Marktgrößen wie Ninebot by Segway, CityBlitz®, IO Hawk, Egret, THE
              URBAN, Streetbooster, Moovi und weitere anbieten können. Auch die
              Zulassung/Versicherung sowie die Beschaffung von Ersatz- und
              Verschleißteilen und weiterhin die Wartung, gehören zu unserem
              umfassenden Serviceangebot. Ergänzt wird das ganze mit einem
              tollen und zum Teil exklusiven Angebot von Zubehör der
              selbstverständlich auch bei Fahrrädern und anderen zweirädrigen
              Fahrzeugen den Fahrkomfort und die Sicherheit erhöhen. Für all die
              zukünftigen E-Scooter-Generationen, die aktuell noch keine 14
              Jahre sind und somit noch nicht berechtigt ein
              elektrounterstütztes Kleinstfahrzeug zu steuern, haben wir von
              klassischen Tretrollern, Laufräder für die ganz kleinen von Yedoo,
              über Kickscooter von der Nummer 1 Hudora, sowie dem total
              beliebten EzyRoller aus Neuseeland einiges weitere im SToRE für
              Euch parat. Auch hier gilt unser Philosophie: Ersatz- und
              Verschleißteile gibt es bei uns im SToRE, denn nur so kann das
              Thema Nachhaltigkeit die immer noch gegenwärtige
              Wegwerfgesellschaft verdrängen. Mein großartiges Team und ich
              freuen uns auf Deinen Besuch und wünschen bis dahin, eine gute
              Zeit!&quot;
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}
