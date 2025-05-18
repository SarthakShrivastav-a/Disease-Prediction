"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"

export default function AboutPage() {
  const headerRef = useRef(null)
  const cardRef = useRef(null)
  const techStackRef = useRef(null)
  const noticeRef = useRef(null)

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })

    // Developer card animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
      },
    )

    // Tech stack cards animation
    const techCards = techStackRef.current?.querySelectorAll(".tech-card")
    gsap.fromTo(
      techCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.5,
        ease: "power2.out",
      },
    )

    // Notice animation
    gsap.fromTo(
      noticeRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
      },
    )

    // Hover animations for social links
    const socialLinks = document.querySelectorAll(".social-link")
    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 1.2, duration: 0.3, ease: "back.out" })
      })
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })

    return () => {
      // Cleanup event listeners
      socialLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => {})
        link.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden py-12 md:py-16" ref={headerRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Nirogya</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Learn about our mission to make healthcare more accessible through technology
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto" ref={cardRef}>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-accent">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="relative w-full h-full transform transition-transform duration-700 hover:scale-105">
                    <Image
                      src="/image.jpg"
                      alt="Sarthak Shrivastava"
                      fill
                      className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">About the Developer</h2>
                <p className="text-muted-foreground mb-6">
                  Hi, I'm Sarthak Shrivastava, a software developer excelling at creating distributed systems. This is
                  my first try at AI/ML as I believe in growing continuously. I'm currently in my sophomore year and
                  love to participate in hackathons and forming communities to foster development.
                </p>
                <p className="text-muted-foreground mb-6">
                  I developed Nirogya to help people gain better insights into potential health conditions based on
                  their symptoms. Early detection and awareness can dramatically improve health outcomes, and I believe
                  AI has a crucial role to play in democratizing access to medical knowledge.
                </p>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/SarthakShrivastav-a"
                    className="social-link text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarthak-shrivastava-45b678297/"
                    className="social-link text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">Powered By</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technologies Used</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Nirogya combines the latest in web development and machine learning to deliver accurate health insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Python */}
          <Card className="card hover-card text-center transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary transform transition-transform duration-500 hover:rotate-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p className="text-muted-foreground">Core programming language</p>
            </CardContent>
          </Card>

          {/* Machine Learning */}
          <Card className="card hover-card text-center transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary transform transition-transform duration-500 hover:rotate-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm-1.775 18l-5.22-3V9l5.22 3v6zm1.775-7.5L6.775 7.5 12 4.5l5.225 3-5.225 3zm6.995 4.5l-5.22 3v-6l5.22-3v6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">AI-powered predictions</p>
            </CardContent>
          </Card>

          {/* Next.js */}
          <Card className="card hover-card text-center transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary transform transition-transform duration-500 hover:rotate-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Next.js</h3>
              <p className="text-muted-foreground">Modern web framework</p>
            </CardContent>
          </Card>

          {/* Flask */}
          <Card className="card hover-card text-center transition-all duration-300">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary transform transition-transform duration-500 hover:rotate-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.73-.738-2.037-1.131-4.198-1.396-6.337 1.115.401 2.136 1.031 3.105 1.72.968.69 1.89 1.45 2.75 2.272.483.468.938.961 1.421 1.444.175.175.35.35.532.517.182.168.371.327.573.468.203.14.419.261.65.35.231.089.476.14.72.14.245 0 .489-.051.72-.14.231-.089.447-.21.65-.35.202-.141.391-.3.573-.468.182-.167.357-.342.532-.517.483-.483.938-.976 1.422-1.444.859-.822 1.78-1.582 2.749-2.272.97-.689 1.99-1.319 3.105-1.72-.265 2.139-.658 4.3-1.396 6.337-.738 2.036-1.818 4.018-3.219 5.73-.666.97-1.642 1.66-2.556 2.38-.914.72-1.89 1.391-2.884 1.973-.994-.582-1.97-1.254-2.884-1.973zm3.564-1.077c-.084-.14-.168-.28-.266-.406-.098-.127-.21-.238-.336-.336-.126-.098-.266-.182-.406-.252-.14-.07-.294-.126-.448-.126-.154 0-.308.056-.448.126-.14.07-.28.154-.406.252-.126.098-.238.21-.336.336-.098.126-.182.266-.266.406-.084.14-.154.294-.21.448-.056.154-.084.308-.084.476 0 .168.028.322.084.476.056.154.126.308.21.448.084.14.168.28.266.406.098.126.21.238.336.336.126.098.266.182.406.252.14.07.294.126.448.126.154 0 .308-.056.448-.126.14-.07.28-.154.406-.252.126-.098.238-.21.336-.336.098-.126.182-.266.266-.406.084-.14.154-.294.21-.448.056-.154.084-.308.084-.476 0-.168-.028-.322-.084-.476-.056-.154-.126-.308-.21-.448zm-5.698-12.433c-.084-.14-.168-.28-.266-.406-.098-.127-.21-.238-.336-.336-.126-.098-.266-.182-.406-.252-.14-.07-.294-.126-.448-.126-.154 0-.308.056-.448.126-.14.07-.28.154-.406.252-.126.098-.238.21-.336.336-.098.126-.182.266-.266.406-.084.14-.154.294-.21.448-.056.154-.084.308-.084.476 0 .168.028.322.084.476.056.154.126.308.21.448.084.14.168.28.266.406.098.126.21.238.336.336.126.098.266.182.406.252.14.07.294.126.448.126.154 0 .308-.056.448-.126.14-.07.28-.154.406-.252.126-.098.238-.21.336-.336.098-.126.182-.266.266-.406.084-.14.154-.294.21-.448.056-.154.084-.308.084-.476 0-.168-.028-.322-.084-.476-.056-.154-.126-.308-.21-.448zm9.044 0c-.084-.14-.168-.28-.266-.406-.098-.127-.21-.238-.336-.336-.126-.098-.266-.182-.406-.252-.14-.07-.294-.126-.448-.126-.154 0-.308.056-.448.126-.14.07-.28.154-.406.252-.126.098-.238.21-.336.336-.098.126-.182.266-.266.406-.084.14-.154.294-.21.448-.056.154-.084.308-.084.476 0 .168.028.322.084.476.056.154.126.308.21.448.084.14.168.28.266.406.098.126.21.238.336.336.126.098.266.182.406.252.14.07.294.126.448.126.154 0 .308-.056.448-.126.14-.07.28-.154.406-.252.126-.098.238-.21.336-.336.098-.126.182-.266.266-.406.084-.14.154-.294.21-.448.056-.154.084-.308.084-.476 0-.168-.028-.322-.084-.476-.056-.154-.126-.308-.21-.448z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flask</h3>
              <p className="text-muted-foreground">Backend API framework</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12" ref={noticeRef}>
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
                  Nirogya is designed to provide information and is not a substitute for professional medical advice,
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
