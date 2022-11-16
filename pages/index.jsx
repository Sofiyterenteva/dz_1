import {Text} from "../components/Text/Text"
import css from "../components/Text/Text.module.css"

export default function IndexPage(){
    function myFunction() {
        var x = document.getElementById("myInput").value;
        document.getElementById("demo").innerHTML = "" + x;
    }
    return(
        <main>
            <Text props="Привет!" />
            <Text props="Меня зовут Соня!" />
            <input type="text" name="interText" placeholder="Inter Text"  onInput={myFunction} id="myInput" />
            <p className={css.text_text} id="demo"></p>
        </main>
    )

}
