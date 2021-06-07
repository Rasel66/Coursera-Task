(function (window){
    var names = ["Rasel","Jim","Jara","Sumon","Jabed","Keya","Jony","Hasib","Jubayer","Karim"];
    for(var i in names)
    {
        var firstLetter = ((names[i]).charAt(0)).toLowerCase();
        if(firstLetter == 'j')
        {
            window.byeSpeaker.speak(names[i]);
        }
        else
        {
            window.helloSpeaker.speak(names[i]);
        }
    }
})(window);