import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About MediScan</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Learn about our mission to make healthcare more accessible through technology
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-accent">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Developer Portrait"
                      width={200}
                      height={200}
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">About the Developer</h2>
                <p className="text-muted-foreground mb-6">
                  Hi, I'm Jane Doe, a passionate medical data scientist dedicated to improving healthcare accessibility
                  through technology. With a background in both computer science and biochemistry, I'm uniquely
                  positioned to bridge the gap between medical knowledge and technological innovation.
                </p>
                <p className="text-muted-foreground mb-6">
                  I developed MediScan to help people gain better insights into potential health conditions based on
                  their symptoms. Early detection and awareness can dramatically improve health outcomes, and I believe
                  AI has a crucial role to play in democratizing access to medical knowledge.
                </p>

                <div className="flex items-center space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">React</h3>
                <p className="text-sm text-muted-foreground">
                  Modern, responsive user interface built with React and Next.js for optimal performance and user
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14 18.594V16.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v2.094a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-4.594a.5.5 0 0 1 .146-.354l5-5a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 .146.354V18.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.406zM12 2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1zM4.5 8H6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 4.5 8zm15 0H21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM12.268 3.904l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346zM7.268 5.424l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346zm9.464 0l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346zM4.904 7.732l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Python</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful backend processing with Python, enabling complex data analysis and API integration for
                  symptom processing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-12 flex items-center justify-center mb-4">
                  <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm-1.775 18l-5.22-3V9l5.22 3v6zm1.775-7.5L6.775 7.5 12 4.5l5.225 3-5.225 3zm6.995 4.5l-5.22 3v-6l5.22-3v6z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced machine learning algorithms analyze symptom patterns to identify potential health conditions
                  with high accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <svg
                className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Important Health Notice</h3>
                <p className="text-muted-foreground">
                  MediScan is designed to provide information and is not a substitute for professional medical advice,
                  diagnosis, or treatment. Always consult with qualified healthcare providers regarding any medical
                  concerns or conditions you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
