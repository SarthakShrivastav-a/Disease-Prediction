import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                AI-Powered Health Analysis
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Personal Health Assistant
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Gain valuable insights into your health with our AI-driven analysis. Identify potential concerns before
                they become serious problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/analyze">
                    Start Analysis
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Trusted by healthcare professionals worldwide</span>
              </div>
            </div>
            <div className="relative mx-auto lg:ml-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-float">
                <Image
                  src="/LP.jpeg"
                  alt="Health monitoring illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">How It Works</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Intelligent Health Analysis in Three Steps
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Our platform uses sophisticated algorithms and machine learning to provide personalized health insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
            <CardContent className="p-6 pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Symptoms</h3>
              <p className="text-muted-foreground mb-4">
                Select from our comprehensive database of symptoms to build an accurate profile of what you're
                experiencing.
              </p>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                Step 1
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
            <CardContent className="p-6 pt-8">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced AI Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Our sophisticated algorithm analyzes your symptom patterns to identify potential health conditions with
                high accuracy.
              </p>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent/10 text-accent">
                Step 2
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
            <CardContent className="p-6 pt-8">
              <div className="w-12 h-12 rounded-lg bg-secondary-foreground flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
              <p className="text-muted-foreground mb-4">
                Get detailed information about potential conditions and actionable recommendations for your next steps.
              </p>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 text-secondary-foreground">
                Step 3
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="gap-1">
            <Link href="/analyze">
              Start Your Analysis
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                Why Choose Nirogya
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Proactive Health Management Starts Here
              </h2>
              <p className="text-muted-foreground md:text-xl mb-8">
                Our platform empowers you to take control of your health journey through early awareness and informed
                decision-making.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Evidence-based algorithm trained on extensive medical data</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Regularly updated with the latest medical research</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Privacy-focused design with secure data handling</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3"></div>
              <Card className="relative z-10 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <HeartPulse className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Advanced Technology</h3>
                      <p className="text-muted-foreground">Powered by machine learning</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 flex items-start gap-3">
                      <div className="text-primary mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Data Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Your health data is encrypted and protected with industry-standard security protocols.
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4 flex items-start gap-3">
                      <div className="text-primary mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Continuous Improvement</h4>
                        <p className="text-sm text-muted-foreground">
                          Our AI models are continuously trained on new medical data to improve accuracy over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">Powered By</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cutting-Edge Technologies</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Nirogya combines the latest in web development and machine learning to deliver accurate health insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14 9V5a3 3 0 0 1-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">React</h3>
              <p className="text-muted-foreground">
                Modern, responsive user interface built with React and Next.js for optimal performance and user
                experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14 18.594V16.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v2.094a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-4.594a.5.5 0 0 1 .146-.354l5-5a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 .146.354V18.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.406zM12 2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1zM4.5 8H6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 4.5 8zm15 0H21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM12.268 3.904l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346zM7.268 5.424l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346zm9.464 0l.966.259a.5.5 0 0 1 .346.606l-.259.966a.5.5 0 0 1-.606.346l-.966-.259a.5.5 0 0 1-.346-.606l.259-.966a.5.5 0 0 1 .606-.346z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p className="text-muted-foreground">
                Powerful backend processing with Python, enabling complex data analysis and API integration for symptom
                processing.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm-1.775 18l-5.22-3V9l5.22 3v6zm1.775-7.5L6.775 7.5 12 4.5l5.225 3-5.225 3zm6.995 4.5l-5.22 3v-6l5.22-3v6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">
                Advanced machine learning algorithms analyze symptom patterns to identify potential health conditions
                with high accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container px-4 md:px-6 py-12">
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
                Nirogya is designed to provide information and is not a substitute for professional medical advice,
                diagnosis, or treatment. Always consult with qualified healthcare providers regarding any medical
                concerns or conditions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
