import Image from "next/image";

export default function Privacy() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 p-4">
      <Image
        src="/icon.png"
        alt=""
        width={500}
        height={500}
        className="mx-auto h-40 w-max object-contain"
      />
      <span className="font-semibold">Política Privacidade</span>
      <span>
        A sua privacidade é importante para nós. É política do Palheta
        Arquitetura respeitar a sua privacidade em relação a qualquer informação
        sua que possamos coletar no site Palheta Arquitetura, e outros sites que
        possuímos e operamos.
      </span>
      <span>
        Solicitamos informações pessoais apenas quando realmente precisamos
        delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais,
        com o seu conhecimento e consentimento. Também informamos por que
        estamos coletando e como será usado.
      </span>
      <span>
        Apenas retemos as informações coletadas pelo tempo necessário para
        fornecer o serviço solicitado. Quando armazenamos dados, protegemos
        dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos,
        bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </span>
      <span>
        Não compartilhamos informações de identificação pessoal publicamente ou
        com terceiros, exceto quando exigido por lei.
      </span>
      <span>
        O nosso site pode ter links para sites externos que não são operados por
        nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas
        desses sites e não podemos aceitar responsabilidade por suas respectivas
        políticas de privacidade.
      </span>
      <span>
        Você é livre para recusar a nossa solicitação de informações pessoais,
        entendendo que talvez não possamos fornecer alguns dos serviços
        desejados.
      </span>
      <span>
        O uso continuado de nosso site será considerado como aceitação de nossas
        práticas em torno de privacidade e informações pessoais. Se você tiver
        alguma dúvida sobre como lidamos com dados do usuário e informações
        pessoais, entre em contacto connosco.
      </span>
      <span>
        O serviço Google AdSense que usamos para veicular publicidade usa um
        cookie DoubleClick para veicular anúncios mais relevantes em toda a Web
        e limitar o número de vezes que um determinado anúncio é exibido para
        você.
      </span>
      <span>
        Para mais informações sobre o Google AdSense, consulte as FAQs oficiais
        sobre privacidade do Google AdSense.
      </span>
      <span>
        Utilizamos anúncios para compensar os custos de funcionamento deste site
        e fornecer financiamento para futuros desenvolvimentos. Os cookies de
        publicidade comportamental usados ​​por este site foram projetados para
        garantir que você forneça os anúncios mais relevantes sempre que
        possível, rastreando anonimamente seus interesses e apresentando coisas
        semelhantes que possam ser do seu interesse.
      </span>
      <span>
        Vários parceiros anunciam em nosso nome e os cookies de rastreamento de
        afiliados simplesmente nos permitem ver se nossos clientes acessaram o
        site através de um dos sites de nossos parceiros, para que possamos
        creditá-los adequadamente e, quando aplicável, permitir que nossos
        parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para
        fazer uma compra.
      </span>
      <span className="font-semibold">Compromisso do Usuário</span>
      <span>
        O usuário se compromete a fazer uso adequado dos conteúdos e da
        informação que o Palheta Arquitetura oferece no site e com caráter
        enunciativo, mas não limitativo:
      </span>
      <span className="ml-4">
        A) Não se envolver em atividades que sejam ilegais ou contrárias à boa
        fé a à ordem pública;
      </span>
      <span className="ml-4">
        B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,
        pixbet ou azar, qualquer tipo de pornografia ilegal, de apologia ao
        terrorismo ou contra os direitos humanos;
      </span>
      <span className="ml-4">
        C) Não causar danos aos sistemas físicos (hardwares) e lógicos
        (softwares) do Palheta Arquitetura, de seus fornecedores ou terceiros,
        para introduzir ou disseminar vírus informáticos ou quaisquer outros
        sistemas de hardware ou software que sejam capazes de causar danos
        anteriormente mencionados.
      </span>
      <span className="font-semibold">Mais informações</span>
      <span>
        Esperemos que esteja esclarecido e, como mencionado anteriormente, se
        houver algo que você não tem certeza se precisa ou não, geralmente é
        mais seguro deixar os cookies ativados, caso interaja com um dos
        recursos que você usa em nosso site.
      </span>
      <span>Esta política é efetiva a partir de 18 Agosto de 2025</span>
    </div>
  );
}
