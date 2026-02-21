import { Link } from "../Links";

const i18n = {
  es: {
    title: "Sobre nosotros",
    description: "Esta es la página de sobre nosotros.",
    linkText: "Ir a inicio",
  },
  en: {
    title: "About us",
    description: "This is the about us page.",
    linkText: "Go to home",
  }
}

const usei18n = (land) => {
  return i18n[land] || i18n["es"];
}

export default function AboutPage({ language = "es" }) {
  const i18n = usei18n(language);

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://scontent.flpg1-2.fna.fbcdn.net/v/t39.30808-1/433136772_10227521380599798_5523154382764430922_n.jpg?stp=c0.0.719.719a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGR7bg8GPDTiGO4suq5H5593ZwmhP0sj1_dnCaE_SyPX4MDTdzltfNaaeLc588hOsA&_nc_ohc=9OxXcpLg4GUQ7kNvwGiXEMq&_nc_oc=AdkKwfMCn4Cy0aJyTRM-M8mykoeVrurCc9FRrZiaPRtU41UvyLecJv8wOe3zubCHVxU&_nc_zt=24&_nc_ht=scontent.flpg1-2.fna&_nc_gid=_nUwT8Jwn7golWTDQd6PjQ&oh=00_AfuJTEF3LwTmtm2swACGjl_X6_-AzGMsgjGaWUSW_mx-qA&oe=69994886"
          alt="Foto de perfil"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.linkText}</Link>
    </>
  );
}
