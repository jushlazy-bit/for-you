
const SECRET_PASSWORD = "srii";

const LETTER = `# To My Favourite Person, Srii 💗🥹

Srii, 💗

You know what? Namma bonding start aanadhu nee en senior-ah irundhappo. Then, nee enakku oru good friend aana… and slowly, without me even realising it, **you became my favourite person.** 🥹🫶

Enoda ellaa sad times-layum nee en kooda irundhirukka. Sometimes, enna solli comfort pannanum-nu kooda theriyama irundhaalum, you still listened to me. Naan solra ellaa mokka stories, sad stories, chinna chinna problems — everything. Nee ketta andha way itself made me feel like I mattered to someone. Maybe unakku adhu oru normal thing-ah irundhirukkalaam, but enakku adhu romba special daa. 🥹💗

**Unna evlo pudikkum-nu enakku words-la explain panna theriyala.** It's not just that I like talking to you. It's the comfort I feel when I talk to you, the trust I have in you, and the way I automatically come to you whenever something hurts me.

Sem leave appo namma night conversations-la, nee *"Unna eppavum skip panna maaten"* nu sonniye… do you even know how deeply those words touched me? Maybe it was just one sentence for you, but for me, it meant so much more. Andha moment-la irundhu, I think I started getting emotionally attached to you. Unkooda oru different kind of connection feel panna aarambichen. 🥹🩷

Enna problem-a irundhaalum, enakku edhaavadhu hurt aanaalum, first unna thedi vandhu azhuven. Because somewhere in my heart, I know you'll listen. Nee enna solren-nu porumaiya kepa, en stories ellathayum ketutu iruppa. Sometimes, I don't even need a solution… **I just need someone who will listen, and somehow, that person became you.** 🫂💗

And that bus travel day… I don't know how to explain what I felt that day. Un mela irundha respect, trust, affection — ellame innum konjam deepen aana maadhiri irundhuchu. I started seeing you as someone I could genuinely trust, someone I could be myself with, without pretending to be okay all the time.

Enakku yaarume illa-nu thonura moments-la kooda, *"Srii iruppaan"* nu oru thought varum. And somehow, that thought alone would make me feel a little less alone. 🥹

Oru time-la, naan oru special-born girl nu nenaippen. But things happened, feelings changed, and there were moments when I started thinking maybe I'm just an unlucky person. Enna special-ah feel panna vecha sila feelings kooda slowly disappear aana maadhiri irundhuchu. But nee… nee enna marubadiyum special-ah feel panna vecha.

**You made me feel like I was still someone worth caring about, even on the days I couldn't see anything special in myself.** 💗

Idhellam eppadi, eppo nadandhuchu-nu enakke theriyala daa. But somewhere along the way, nee enakku romba pudichitta. Not just as a friend… not just as someone I talk to… but as someone who holds a really special place in my heart. 🥹🫶 Hmmm… vera enna solla? Unna pudichirukku daa, avlodhaan. 😭💗

Un kannu, un voice, un attitude, un kovam… literally, there are so many little things about you that I like. Sometimes nee kovama pesinaalum, un attitude-ah paathaalum, enakku pudikkum. Don't ask me why, because honestly, even I don't have a proper explanation! aproo ipo la ne enna romba tension pannura ithalam sari illa pathukoo....Aiyo, romba perusaa poiduchu pola! 😂 Innum evlo sollanum-nu irukku, but words ellam mix aagudhu. So, now, idhoda stop pannikkuren.

**Maybe this letter will come to an end, but my torture!! Adhu mattum end aagaadhu, Srii!** 😂💗 Unna eppavum tease pannitu, torture pannitu, mokka stories sollitu, un patience-ah test pannitu… unkoodave iruppen. So, better be prepared! 🤭🫶Jokes apart, I'm genuinely so happy and blessed that I got to know you. Nee en life-la vandhadhu, enakku ivlo memories and feelings kuduthadhu — I'm really grateful for that.

I don't know how to explain everything perfectly  and

Thank you for listening to me, for being there during my sad times, for making me feel special when I needed it, and for becoming someone I can trust with my feelings.

And finally…

**I'M SO HAPPY AND BLESSED TO HAVE YOU IN MY LIFE, SRII.** 🥹🩷

Love you so much, daa. Ummahhh! 😚💗🫶

*With all my little feelings, endless stories, and unlimited torture…*

**By Your favourite torture partner, always. ♡** 😭💌`;

const lockScreen = document.getElementById("lockScreen");
const letterScreen = document.getElementById("letterScreen");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const hearts = document.getElementById("hearts");

passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const answer = passwordInput.value.trim().toLowerCase();

    if (answer === SECRET_PASSWORD) {
        message.textContent = "";
        lockScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");

        paper.classList.add("open");

        setTimeout(typeLetter, 1800);
    } else {
        message.textContent =
            "Aiyooo, thappu srii ! 😂💗 Marubadiyum try pannu! Unnaala kandupidikka mudiyum! 🤭";

        passwordInput.value = "";
        passwordInput.focus();
    }
});

function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function formatLetter(text) {
    return escapeHTML(text)
        .replace(/^# (.+)$/gm, "<strong>$1</strong>")
        .replace(/\*\*(.+?)\*\*/gs, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/gs, "<em>$1</em>");
}

function typeLetter() {
    let index = 0;
    letterText.textContent = "";

    function typeNext() {
        if (index < LETTER.length) {
            letterText.textContent += LETTER.charAt(index);
            index++;

            setTimeout(typeNext, 18);
        } else {
            // Format bold and italic text after typing finishes.
            letterText.innerHTML = formatLetter(LETTER);

            // Show hearts after the entire letter is displayed.
            hearts.classList.remove("hidden");
        }
    }

    typeNext();
}
