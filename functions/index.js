// Eliminate Basic errors
'use strict';

// Importing modules from actions on google client library
const {dialogflow,
      BasicCard,
      Image,
      Suggestions,
      MediaObject
} = require('actions-on-google');

// Import firebase functions for deployment
const functions = require('firebase-functions');

// Instantiate dialogflow module
const app = dialogflow({debug:true});


// ----------------------------------------------Songs URLs---------------------------------------------------------//

// Welcome Song URL
const welcometoappsong = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Welcome%20Song%20New%20(mp3cut.net).mp3';

// Professor URLs
const proffsound = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/professorsayingwelcome.mp3';
const proffemotional  = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Screenrecorder-2020-04-25-00-17%20(mp3cut.net).mp3';
const proffrules = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Professor%20Rules%20part%20neww.mp3';
const proffmanipulative = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Manipulative';
const proffcaring = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/proffacaring%20(1).mpeg'
const proffthreatning = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Threatning%20Alicia.mp3';
const profftalking = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Interaction.mp3';

// Berlin URLs
const berlinsound = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Berlin%20Audio.mp3';
const berlindeath = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/berlin%20death.mp3';
const berlinwedding = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/songberlin.mp3';
const berlintoardiana = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/ardianaberlin.mp3';
const berlinplanexplanation = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Berlinmeetsproff.mp3';
const berlinthreatningrio = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/rioberlin.mp3';

// Tokyo URLs
const tokyosound = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/nametokyofinal.mp3';
const tokyoanger = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/angrytokyofinal.mp3';
const tokyopunishment = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/punishmenttokyofinal.mp3';
const tokyorescue = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/rescuetokyofinal.mp3';
const tokyolaugh = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/Tokyolaughfinal.mp3';
const tokyoterrifying = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/Alisontokyothreatfinal.mp3';

// Palermo URLs
const palermosound = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/palermosound.mp3';
const palermoboomboomciao = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Palermoboomfinal%20.mp3';
const palermopermission = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Palermopermission.mp3';
const palermonews = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Plaermonews.mp3';
const palermoshooting = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/palermshoot.mp3';
const palermodisappointed = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Palermoberlinrelationship.mp3';

// Nairobi URLs
const nairobisound = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/NAIROBISOUND.mp3';
const nairobideath = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/NairobiDeath.mp3';
const nairobifight = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/NAIROBIBERLINFIGHT.mp3';
const nairobigivingorders = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/NAIROBIORDERS.mp3';
const nairobiadvicetoalison = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/NAIROBIALISONADVICE.mp3';

// Arturo URLs
const arturosound = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/ARTUROSOUND.mp3';
const arturoback = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/ARTURO%20BACK.mp3';
const arturofame = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/ARTUROFAME.mp3';
const arturogun = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/ARTURO%20GUN.mp3';
const arturosuggestion = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/ARTUROSUGGESTION.mp3';

// Song URLs
const bellaciao = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/BellaCiao.mp3';
const tiamo = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/TiAmo.mp3';
const mylife = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/MyLifeIsGoinOn.mp3';
const centro = 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Centro%20di%20gravit%C3%A0%20permanente.mp3';
// ----------------------------------------------Welcome Intent---------------------------------------------------------//

app.intent('Default Welcome Intent', (conv) => {
    conv.ask(`<speak><audio src="${welcometoappsong}"></audio>`
    + `Welcome to the Money Heist application. I hope you'll love this application as much as you loved the Money Heist Series. Get started by selecting your favourite character among Professor, Berlin, Palermo, Tokyo, Nairobi, Arturo, Rio, Denver, Moscow, Helsinki, Oslo, Lisbon or if you want to listen Money Heist song, you can choose from the following options.</speak>`);
    conv.ask(new Suggestions(['Bella Ciao', 'Ti Amo', 'Life is Going on', 'Centro di gravita'])); 
});

//----------------------------------------------Songs Starts-----------------------------------------------------------//

// Bella Ciao
app.intent('Bella Ciao', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Playing Bella Ciao...` );      
    conv.ask(new MediaObject({
        name: 'Playing Bella Ciao | Goodbye Beautiful',
        url: `${bellaciao}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/bellaciao.jpg',
            alt: 'Media icon',
        }),
    })),
    conv.ask(new Suggestions(['Ti Amo', 'Life is Going on', 'Centro di gravita'])); 
});

// Ti Amo
app.intent('Ti Amo', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Playing Ti Amo...` );      
    conv.ask(new MediaObject({
        name: 'Playing Ti Amo | I Love You',
        url: `${tiamo}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/tiamo.jpg',
            alt: 'Media icon',
        }),
    })),
    conv.ask(new Suggestions(['Bella Ciao', 'Life is Going on', 'Centro di gravita']));     
});

// My Life is Going on
app.intent('Life is Going on', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Playing My Life is Going on...` );      
    conv.ask(new MediaObject({
        name: 'Playing My Life is Going on...',
        url: `${mylife}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/mylifeisgoingon.jpg',
            alt: 'Media icon',
        }),
    })),
    conv.ask(new Suggestions(['Bella Ciao', 'Ti Amo', 'Centro di gravita']));     
});

// Centro di gravita
app.intent('Centro di gravita', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Playing Centro di gravita...` );      
    conv.ask(new MediaObject({
        name: 'Playing Centro di gravita...',
        url: `${centro}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/centeroda.jpg',
            alt: 'Media icon',
        }),
    })),
    conv.ask(new Suggestions(['Bella Ciao', 'Ti Amo', 'Life is Going on']));     
});

//--------------------------------------------------Songs End--------------------------------------------------------------//

//-----------------------------------------------Welcome Intent End-------------------------------------------------------//

//-----------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------Conversational Characters----------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------Professor (Sergio Marquina)---------------------------------------------//


app.intent('Professor', (conv, { Professor }) => {
    conv.ask(`<speak> Let's talk to Professor. <audio src="${proffsound}"></audio></speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Hey there! It's Professor also known as Sergio Marquina. \n Thanks for chosing me as your favourite character.\n Swipe left for more options below.`,
        title: 'Sergio Marquina',
        subtitle: 'Protagonist of the TV show',
        image: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/professor.jpg',
            alt: 'Sergio Marquina'
        }),
      }));
      conv.ask(`<speak>Please select from the following options to know more about Professor.</speak>`);
      conv.ask(new Suggestions(['Emotional','Rules', 'Threatning', 'Manipulative','Caring', 'Talking']));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display.');
    }
});

// --------------------------------------Professor (Sergio Marquina) Suggestion Chips-------------------------------//

// Emotional
app.intent('emotional', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor being emotional when he comes to know that Suarez executed Lisbon.` );      
    conv.ask(new MediaObject({
        name: 'Professor being emotional.',
        url: `${proffemotional}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/professoremotional.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Rules', 'Threatning', 'Manipulative','Caring', 'Talking']));     
});

// Rules
app.intent('rules', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor explaining rules to all the members of Heist.`);      
    conv.ask(new MediaObject({
        name: 'Professor explaining Rules.',
        url: `${proffrules}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/proffruless.png',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Emotional', 'Threatning', 'Manipulative','Caring', 'Talking']));     
});

// Manipulative
app.intent('manipulative', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor influencing Lisbon to switch the sides.` );      
    conv.ask(new MediaObject({
        name: 'Professor manipulating Lisbon.',
        url: `${proffmanipulative}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/manipulative.PNG',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Emotional','Rules', 'Threatning','Caring', 'Talking']));     
});

// Caring
app.intent('caring', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor showing his love for Tokyo when she returned and after the Rio was executed.` );      
    conv.ask(new MediaObject({
        name: 'Professor showing his love for Tokyo. ',
        url: `${proffcaring}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/proffcaring.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Emotional','Rules', 'Threatning', 'Manipulative','Talking']));     
});

// Talking
app.intent('talking', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor talking to Raquel (inspector in charge in the beginning of the Royal Mint Heist)` );      
    conv.ask(new MediaObject({
        name: 'Professor talking to inspector.',
        url: `${profftalking}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/interaction%20with%20proofff.PNG',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Emotional','Rules', 'Threatning', 'Manipulative','Caring']));     
});

// Threatning
app.intent('threatning', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor threatning alicia sierra as he assumes she executed Raquel (Lisbon)` );      
    conv.ask(new MediaObject({
        name: 'Professor threatning Alicia.',
        url: `${proffthreatning}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/threatning.PNG',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Emotional','Rules', 'Manipulative','Caring', 'Talking']));     
});

//---------------------------------------Professor (Sergio Marquina) Character Ends---------------------------------//

// -------------------------------------------Berlin (Andres Fonollsa)---------------------------------------------//

app.intent('Berlin', (conv, { Berlin }) => {
    conv.ask(`<speak> Let's talk to Berlin. <audio src="${berlinsound}"></audio></speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Hey there! It's Berlin also known as Andres Fonollosa. \n Thanks for chosing me as your favourite character.\n Swipe left for more options below.`,
        title: 'Andres Fonollosa',
        subtitle: 'Incharge of Royal Mint Heist',
        image: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/berlin%20pic.jpg',
            alt: 'Andres Fonollosa'
        }),
      }));
      conv.ask(`<speak>Please select from the following options to know more about Berlin.</speak>`);
      conv.ask(new Suggestions(['Wedding','Death', 'Plan', 'Ardiana','Scary']));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display.');
    }
});

// --------------------------------------Berlin (Andres Fonollsa) Suggestion Chips-------------------------------------//

// Wedding
app.intent('Wedding', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Berlin with Professor, Palermo and other guests enjoys his wedding by dancing and singing.` );      
    conv.ask(new MediaObject({
        name: 'Berlin enjoying his wedding.',
        url: `${berlinwedding}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Berlin%20wedding%20.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Death', 'Plan', 'Ardiana','Scary']));     
});

// Death Moment
app.intent('Death', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Berlin keeps on Firing at Police and ignoring Professor's order to come back. Finally, he was shot dead.`);      
    conv.ask(new MediaObject({
        name: "Berlin's Death Moment.",
        url: `${berlindeath}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/berlin%20death.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Wedding', 'Plan', 'Ardiana', 'Scary']));     
});

// Plan Explanation
app.intent('Plan', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Berlin with Palermo explainis the Bank of Spain heist to Professor when he comes to Italy.` );      
    conv.ask(new MediaObject({
        name: 'Berlin explaining Bank of Span Heist.',
        url: `${berlinplanexplanation}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/berlinmeetsproffesor.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Wedding','Death', 'Ardiana','Scary']));     
});

// Berlin talk to Ardiana
app.intent('Ardiana', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Berlin explaining his plans to Ardiana after Royal Mint heist.` );      
    conv.ask(new MediaObject({
        name: 'Berlin started liking Ardiana.',
        url: `${berlintoardiana}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/berlinwithardiana.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Wedding','Death', 'Plan', 'Scary']));     
});

// Threatning Rio
app.intent('Scary', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Berlin threatning Rio with Helsinki when he commits a mistake.` );      
    conv.ask(new MediaObject({
        name: 'Berlin threatning Rio',
        url: `${berlinthreatningrio}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/berlinrio.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Wedding','Death', 'Plan', 'Ardiana']));     
});

//---------------------------------------------Berlin (Andres Fonollosa) Character Ends---------------------------------//

// ------------------------------------------------Tokyo (Silene Oliveira)---------------------------------------------//

app.intent('Tokyo', (conv, { Tokyo }) => {
    conv.ask(`<speak> Let's talk to Tokyo. <audio src="${tokyosound}"></audio></speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Hey there! It's Tokyo also known as Silene Oliveira. \n Thanks for chosing me as your favourite character.\n Swipe left for more options below.`,
        title: 'Silene Oliveira',
        subtitle: 'Narrator of the TV Show',
        image: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/Tokyo%20image.jpg',
            alt: 'Silene Oliveira'
        }),
      }));
      conv.ask(`<speak>Please select from the following options to know more about Tokyo.</speak>`);
      conv.ask(new Suggestions(['Angry','Punishment', 'Rescue', 'Laughing','Terrifying']));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display.');
    }
});

// --------------------------------------Tokyo (Silene Oliveira) Suggestion Chips-------------------------------------//

// Angry
app.intent('Angry', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Tokyo showing her extreme anger when Professor asks to take care of Gandia.` );      
    conv.ask(new MediaObject({
        name: 'Tokyo showing her anger.',
        url: `${tokyoanger}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/angrytokyoo.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Punishment', 'Rescue', 'Laughing','Terrifying']));     
});

// Punishment
app.intent('Punishment', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Berlin throws tokyo to police out of royal mint as a punishment for torturing him.`);      
    conv.ask(new MediaObject({
        name: "Tokyo's Punishment",
        url: `${tokyopunishment}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/tokyoopunishment.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Angry', 'Rescue', 'Laughing','Terrifying']));     
});

// Rescue
app.intent('Rescue', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Tokyo after Berlin's punishment rescues herself by entering into the Royal Mint of Spain with Bike despite of continous police firing.` );      
    conv.ask(new MediaObject({
        name: "Tokyo's rescue operation.",
        url: `${tokyorescue}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/tokyoorescue.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Angry','Punishment', 'Laughing','Terrifying']));     
});

// Laughing
app.intent('Laughing', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Tokyo continously laughs on Alison Parker's lie. ` );      
    conv.ask(new MediaObject({
        name: 'Tokyo laughing hard. ',
        url: `${tokyolaugh}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/tokyoolaugh.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Angry','Punishment', 'Rescue', 'Terrifying']));     
});

// Terrifying
app.intent('Terrifying', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Tokyo threatens Alison Parker as she was afraid about Alison and Rio's relationship. ` );      
    conv.ask(new MediaObject({
        name: "Tokyo's terrifying mood. ",
        url: `${tokyoterrifying}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Tokyo/tokyoothreattoalison.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Angry','Punishment', 'Rescue', 'Laughing']));     
});

//---------------------------------------------Tokyo (Silene Oliveira) Character Ends---------------------------------//

// ------------------------------------------------Palermo (Martín Berrote)---------------------------------------------//

app.intent('Palermo', (conv, { Palermo }) => {
    conv.ask(`<speak> Let's talk to Palermo. <audio src="${palermosound}"></audio></speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Hey there! It's Palermo also known as Martín Berrote. \n Thanks for chosing me as your favourite character.\n Swipe left for more options below.`,
        title: 'Martín Berrote',
        subtitle: 'Commanding Officer of Bank of Spain Heist',
        image: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Palermoimage.jpg',
            alt: 'Martín Berrote'
        }),
      }));
      conv.ask(`<speak>Please select from the following options to know more about Palermo.</speak>`);
      conv.ask(new Suggestions(['BoomBoomCiao','Permission', 'News', 'Shooting','Disappointed']));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display.');
    }
});

// --------------------------------------Palermo (Martín Berrote) Suggestion Chips-------------------------------------//

// BoomBoomCiao
app.intent('BoomBoomCiao', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Palermo debating with everyone and singing the Boom Boom Ciao song.` );      
    conv.ask(new MediaObject({
        name: 'Palermo singing Boom Boom Ciao. ',
        url: `${palermoboomboomciao}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Palermoboom.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Permission', 'News', 'Shooting','Disappointed']));     
});

// Permission
app.intent('Permission', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Professor asking Palermo to help him for the Bank of Spain Heist but Palermo shows his dissatisfaction for Berlin's death.`);      
    conv.ask(new MediaObject({
        name: "Palermo's approval for Bank of Spain Heist.",
        url: `${palermopermission}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/PalermoPermission.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['BoomBoomCiao', 'News', 'Shooting','Disappointed']));     
});

// News
app.intent('News', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Palermo announcing one bad and one good news to hostages.` );      
    conv.ask(new MediaObject({
        name: "Palermo announcing News. ",
        url: `${palermonews}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/Palermonews.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['BoomBoomCiao','Permission', 'Shooting','Disappointed']));     
});

// Shooting
app.intent('Shooting', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Palermo shooting on Gandia when Tokyo and Nairobi fails to cover up the Governor of Bank of Spain. Ultimately, his eye got damaged. ` );      
    conv.ask(new MediaObject({
        name: "Palermo's shooting result. ",
        url: `${palermoshooting}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/palermoshooting.png',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['BoomBoomCiao','Permission', 'News', 'Disappointed']));     
});

// Disappointed
app.intent('Disappointed', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Palermo was disappointed when Berlin chose the Royal Mint Heist plan over Palermo's proposal of Bank of Spain Heist. ` );      
    conv.ask(new MediaObject({
        name: "Palermo's disappointed mood. ",
        url: `${palermodisappointed}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Palermo/palermoberlin.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['BoomBoomCiao','Permission', 'News', 'Shooting']));     
});

//--------------------------------------------Palermo (Martín Berrote) Character Ends---------------------------------//

// ----------------------------------------------Nairobi (Ágata Jiménez)---------------------------------------------//

app.intent('Nairobi', (conv, { Nairobi }) => {
    conv.ask(`<speak> Let's talk to Nairobi. <audio src="${nairobisound}"></audio></speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Hey there! It's Nairobi also known as Ágata Jiménez. \n Thanks for chosing me as your favourite character.\n Swipe left for more options below.`,
        title: 'Ágata Jiménez',
        subtitle: 'Quality control manager for Banknotes',
        image: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/Nairobiimage.jpg',
            alt: 'Ágata Jiménez'
        }),
      }));
      conv.ask(`<speak>Please select from the following options to know more about Nairobi.</speak>`);
      conv.ask(new Suggestions(['Death Scene','Fight with Berlin', 'Giving Orders', 'Advice to Alison']));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display.');
    }
});

// --------------------------------------Nairobi (Ágata Jiménez) Suggestion Chips-------------------------------------//

// Death Scene
app.intent('Death Scene', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Gandia shots Nairobi on her head after that other heist members started firing on him.` );      
    conv.ask(new MediaObject({
        name: 'Nairobi shot dead.',
        url: `${nairobideath}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/NairobiDeathpic.png',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Fight with Berlin', 'Giving Orders', 'Advice to Alison']));     
});

// Fight with Berlin
app.intent('Fight with Berlin', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Nairobi enters Berlin office speaking about Berlin's resume that how miserably he tortured minors. Soon, Berlin took a revenge. `);      
    conv.ask(new MediaObject({
        name: "Nairobi accused Berlin. ",
        url: `${nairobifight}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/nairobifight.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Death Scene', 'Giving Orders', 'Advice to Alison']));     
});

// Giving Orders
app.intent('Giving Orders', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Nairobi giving orders to Mr. Torres and other members of printing machines to scale down the operation.` );      
    conv.ask(new MediaObject({
        name: "Quality Manager Nairobi's Orders. ",
        url: `${nairobigivingorders}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/nairobiorders.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Death Scene','Fight with Berlin', 'Advice to Alison']));     
});

// Advice to Alison
app.intent('Advice to Alison', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Nairobi's impressive advice to Alison Parker which she unfollows over time. ` );      
    conv.ask(new MediaObject({
        name: "Nairobi's advice to Alison. ",
        url: `${nairobiadvicetoalison}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Nairobi/nairobiadvice.png',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Death Scene','Fight with Berlin', 'Giving Orders']));     
});

//---------------------------------------------Nairobi (Ágata Jiménez) Character Ends---------------------------------//

// ----------------------------------------------Arturito (Arturo Román)---------------------------------------------//

app.intent('Arturo', (conv, { Arturo }) => {
    conv.ask(`<speak> Let's talk to Arturo. <audio src="${arturosound}"></audio></speak>`);
    // For Screen output
    if(conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        text: `Hey there! It's Arturito also known as Arturo Román. \n Thanks for chosing me as your favourite character.\n Swipe left for more options below.`,
        title: 'Arturo Román',
        subtitle: 'Former Director of Royal Mint and a Leading Hostage',
        image: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/arturoimage.jpg',
            alt: 'Arturo Román'
        }),
      }));
      conv.ask(`<speak>Please select from the following options to know more about Arturo.</speak>`);
      conv.ask(new Suggestions(['Arturo is back','Arturo gains public fame', 'Arturo got gun', "Arturo suggestion"]));     
    }
    // For Google Home
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask('Please try this on screen display.');
    }
});

// --------------------------------------Arturito (Arturo Román) Suggestion Chips-------------------------------------//

// Arturo is back
app.intent('Arturo is Back', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`After giving his valuable suggestions to the Police, Arturo enters into the bank of spain when the gates were opened out of curiosity. God knows if he wants to meet Monica Gaztambide. ` );      
    conv.ask(new MediaObject({
        name: 'Arturo is Back. ',
        url: `${arturoback}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/arturobackk.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Arturo gains public fame', 'Arturo got gun', "Arturo suggestion"]));     
});

// Arturo gains public fame
app.intent('Arturo gains public fame', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`A famous hostage hero Arturo gains too much popularity overtime that he was found organising motivational shows among millions of people. `);      
    conv.ask(new MediaObject({
        name: "Arturo's Motivational Show",
        url: `${arturofame}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/arturofame.PNG',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Arturo is back', 'Arturo got gun', "Arturo suggestion"]));     
});

// Arturo got gun
app.intent('Arturo got gun', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`Arturo got the powerful gun at last but soon an undercover agent for the gang shoots him on his leg leading to his punishment. ` );      
    conv.ask(new MediaObject({
        name: "Arturo having a gun. ",
        url: `${arturogun}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/arturogun.jpg',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Arturo is back','Arturo gains public fame', "Arturo suggestion"]));     
});

// Arturo Suggestion
app.intent('Arturo Suggestion', (conv) => {
    if (!conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT')) {
        conv.ask('Sorry, this device does not support audio playback.');
        return;
      }
    conv.ask(`When police officers asks Arturo about next leader, he gave a wrong suggestion and told Denver has been replaced by the Berlin's post of incharge. ` );      
    conv.ask(new MediaObject({
        name: "Arturo's wrong suggestion to Police. ",
        url: `${arturosuggestion}`,
        icon: new Image({
            url: 'https://storage.googleapis.com/money-heist-9f7d2.appspot.com/Arturo/arturosuggestion.PNG',
            alt: 'Media icon',
        }),
    }));
    conv.ask(new Suggestions(['Arturo is back','Arturo gains public fame', 'Arturo got a gun']));     
});

//---------------------------------------------Arturito (Arturo Román) Character Ends---------------------------------//

//-----------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------Non-Conversational Characters-------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//

// Rio

app.intent('Rio', (conv, {Rio}) => {
    conv.ask('<speak> Hey there! I am Rio also known as Aníbal Cortés. My conversational part will be added soon. Thanks for your patience! In the meantime, please see the actions for Professor, Berlin, Palermo, Tokyo, Nairobi and Arturo. </speak>');
});

// Denver

app.intent('Denver', (conv, {Denver}) => {
    conv.ask('<speak> Hey there! I am Denver also known as Ricardo Ramos. My conversational part will be added soon. Thanks for your patience! In the meantime, please see the actions for Professor, Berlin, Palermo, Tokyo, Nairobi and Arturo. </speak>');
});

// Moscow

app.intent('Moscow', (conv, {Moscow}) => {
    conv.ask('<speak> Hey there! I am Moscow also known as Augstin Ramos. My conversational part will be added soon. Thanks for your patience! In the meantime, please see the actions for Professor, Berlin, Palermo, Tokyo, Nairobi and Arturo. </speak>');
});

// Helsinki

app.intent('Helsinki', (conv, {Helsinki}) => {
    conv.ask('<speak> Hey there! I am Helsinki also known as Mirko Dragić. My conversational part will be added soon. Thanks for your patience! In the meantime, please see the actions for Professor, Berlin, Palermo, Tokyo, Nairobi and Arturo. </speak>');
});

// Oslo

app.intent('Oslo', (conv, {Oslo}) => {
    conv.ask('<speak> Hey there! I am Oslo also known as Radko Dragić. My conversational part will be added soon. Thanks for your patience! In the meantime, please see the actions for Professor, Berlin, Palermo, Tokyo, Nairobi and Arturo.</speak>');
});

// Lisbon

app.intent('Lisbon', (conv, {Raquel}) => {
    conv.ask('<speak> Hey there! I am Lisbon also known as Raquel Murillo. My conversational part will be added soon. Thanks for your patience! In the meantime, please see the actions for Professor, Berlin, Palermo, Tokyo, Nairobi and Arturo. </speak>');
});

// Handling the media event
app.intent('media status', (conv) => {
    const mediaStatus = conv.arguments.get('MEDIA_STATUS');
    let response = 'Unknown media status received.';
    if (mediaStatus && mediaStatus.status === 'FINISHED') {
      response = 'Hope you enjoyed the tunes!';
    }
    conv.ask(response);
    conv.ask(new Suggestions(suggestionChips)); 
  });

// Handling the unrecognized action
app.intent('Unrecognized Action', (conv, {any}) => {
    let response = `Either this action "${any}" is not available or you need to update your Google Assistant App.`;
    conv.ask(`Please try that again if problem persists then ${response}`);
});


// Set dialogflow object to handle POST request
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

//-----------------END-------------------//