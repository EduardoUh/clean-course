(() => {
    /* 
        Here we implement the interface segregation principle by creating three extra interfaces of birds (flying, running and swimming birds)
        which helped us to remove the fly, run and swim methods from the Bird interface, resulting in that the classes that implements
        the Bird interface are not forced to implement the fly, running and swim method even if the bird type doesn't actually fly, runn or swim.
    */
    interface Bird {
        eat(): void;
    }

    interface FlyingBird {
        fly(): void;
    }

    interface RunningBird {
        run(): void;
    }

    interface SwimmingBird {
        swim(): void;
    }

    class Tucan implements Bird, FlyingBird {
        public fly() { }
        public eat() { }
    }

    class Humminbird implements Bird, FlyingBird {
        public fly() { }
        public eat() { }
    }

    class Ostrich implements Bird, RunningBird {
        public eat() { }
        public run() { }
    }

    class Penguin implements Bird, SwimmingBird {
        public eat() { }
        public swim() { }
    }

})();