const randomSelections = ["hello", "hi", "duh"];
function GetRandomInt(max) {
return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const description = randomSelections[GetRandomInt(2)];
    return (<header>
      <img src="src/assets/react-core-concepts.png" width={100} height={50} alt="Stylized atom" />
      <h1>React Essentialszzzzsss</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
  };