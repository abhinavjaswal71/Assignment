

module.exports = class Game{
    constructor(){
        this.status = 'question';
        this.quiz = 1;
        this.end = 0;
        this.correct = 0;
        this.total = 5;

    }
    
    makeAMove(sInput)
    {
        if(this.end === 0) {
            if(this.quiz === 1 && this.status === 'question') {
            
                this.status = 'answer'
                return [`Survival in the Jungle
                        One day you come awake in a dark dense jungle. You are worried, what will you do ?
                        a) You will scream your head off 
                        b) Collect your thoughts. Now is not the time to panic 
                         `];
            }
            else if(this.quiz === 1 && this.status === 'answer') {
                this.status = 'question';
                this.quiz++;
                if(sInput.toLowerCase() === 'a'|| sInput.toLowerCase() === 'b') {
                    if(sInput.toLowerCase() === 'a') {
                        return [`Wrong! The first thing to do when you realize that you’re lost is to stop and think
                        You're going to be just fine.`];
                    }
                    else {
                        this.correct++;
                        return [` Correct! The first thing to do when you realize that you’re lost is to stop and think
                        You're going to be just fine. 
                        `];
                    }
                }
                else {
                    this.status = 'question';
                    return ['Please choose between a and b'];
                }
            }
    
            if(this.quiz === 2 && this.status === 'question') {
                
                this.status = 'answer'
                return [`Wait, what was that? You hear heavy branches breaking from the right. What do you do?
                     a) Freeze until you can assess the potential danger.
                     b) Absolutely nothing. Probably a squirrel. 
                         `];
            }
            else if(this.quiz === 2 && this.status === 'answer') {
                this.quiz++;
                this.status = 'question';
                if(sInput.toLowerCase() === 'a'|| sInput.toLowerCase() === 'b') {
                    if(sInput.toLowerCase() === 'a') {
                        this.correct++;
                        return [`Correct! The jungle has many large predators. 
                        Making sudden movements when being watched by some predators 
                        i.e. jaguars could induce their predatory instincts, causing them to attack..`];
                    }
                    else {
                        return [` Wrong! The jungle has many large predators. 
                        Making sudden movements when being watched by some predators 
                        i.e. jaguars could induce their predatory instincts, causing them to attack..
                        `];
                    }
                }
                else {
                    this.status = 'question';
                    return ['Please choose between a and b'];
                }
            }
            if(this.quiz === 3 && this.status === 'question') {
                
                this.status = 'answer'
                return [`Fortunately, the creature leaves you alone. But boy are you thirsty. How should you find water?
                        a) Cut into a tree-vine and try to drink the fluids inside. 
                        b) Look for the nearest river and drink up.
                         `];
            }
            else if(this.quiz === 3 && this.status === 'answer') {
                this.status = 'question'
                this.quiz++;
                if(sInput.toLowerCase() === 'a'|| sInput.toLowerCase() === 'b') {
                    if(sInput.toLowerCase() === 'a') {
                        this.correct++;
                        return [`Correct! In rainforests, water vines grow in large numbers and require no purification before drinking. `];
                    }
                    else {
                        return [` Wrong! In rainforests, water vines grow in large numbers and require no purification before drinking. 
                        `];
                    }
                }
                else {
                    this.status = 'question';
                    return ['Please choose between a and b'];
                }
            }
    
            if(this.quiz === 4 && this.status === 'question') {
                
                this.status = 'answer'
                return [`You need some rest for a full day of hunting in the morning. Where are you sleeping?
                        a) High up in a tree. 
                        b) Let's make a simple lean-to shelter. 
                         `];
            }
            else if(this.quiz === 4 && this.status === 'answer') {
                this.status = 'question';
                this.quiz++;
                if(sInput.toLowerCase() === 'a'|| sInput.toLowerCase() === 'b') {
                    if(sInput.toLowerCase() === 'a') {
                        this.correct++;
                        return [`Correct! Because on grround you will find spiders, ants, snakes and all sorts of other creepy crawlies that can bite you causing harm.`];
                    }
                    else {
                        return [` Wrong! Because on grround you will find spiders, ants, snakes and all sorts of other creepy crawlies that can bite you causing harm. 
                        `];
                    }
                }
                else {
                    this.status = 'question';
                    return ['Please choose between a and b'];
                }
            }
    
            if(this.quiz === 5 && this.status === 'question') {
                
                this.status = 'answer'
                return [`Well-rested, you decide it's time to get outta here. What's the best way to track your direction?
                        a) Track animal trails to their natural ends to find water. 
                        b) Follow the moss on tree trunks, it always points north.
                         `];
            }
            else if(this.quiz === 5 && this.status === 'answer') {
                this.end = 1;
                this.status = 'question'
                this.quiz++;
                if(sInput.toLowerCase() === 'a'|| sInput.toLowerCase() === 'b') {
                    if(sInput.toLowerCase() === 'a') {
                        this.correct++;
                        return [`Correct! Animal trails will usually lead to food or water eventually. It is a good strategy if you have no idea where you are or which direction safe haven is. `];
                    }
                    else {
                        return [` Wrong! Animal trails will usually lead to food or water eventually. It is a good strategy if you have no idea where you are or which direction safe haven is. 
                        `];
                    }
                }
                else {
                    this.status = 'question';
                    return ['Please choose between a and b'];
                }
            }
            
        }
        else {
            this.status = 'question';
             this.quiz = 1;
                this.end = 0;
            return [`You got ${this.correct} correct answers.
            Want to play again`];
        }
        
    }
}