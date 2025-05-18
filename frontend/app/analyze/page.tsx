"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowRight, Check, Info, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Prediction {
  disease: string
  confidence: number
}

export default function AnalyzePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [allSymptoms, setAllSymptoms] = useState<string[]>([])
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingSymptoms, setIsLoadingSymptoms] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const maxSymptoms = 7
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    // Fetch all symptoms when component mounts
    const fetchSymptoms = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/symptoms`)
        if (!response.ok) {
          throw new Error(`Failed to fetch symptoms: ${response.status}`)
        }
        const data = await response.json()

        // Format symptoms to be more readable (replace underscores with spaces and capitalize)
        const formattedSymptoms = data.symptoms.map((symptom: string) =>
          symptom.replace(/_/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
        )

        setAllSymptoms(formattedSymptoms)
        setIsLoadingSymptoms(false)
      } catch (err) {
        console.error("Error fetching symptoms:", err)
        setError("Failed to load symptoms. Please try again later.")
        setIsLoadingSymptoms(false)
      }
    }

    fetchSymptoms()
  }, [apiUrl])

  const filteredSymptoms =
    searchTerm === ""
      ? []
      : allSymptoms
          .filter((s) => s.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedSymptoms.includes(s))
          .slice(0, 10)

  const addSymptom = (symptom: string) => {
    if (selectedSymptoms.length < maxSymptoms && !selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom])
      setSearchTerm("")
    }
  }

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSymptoms.length === 0) return

    setIsLoading(true)
    setError(null)

    try {
      // Convert symptoms back to API format (lowercase with underscores)
      const formattedSymptoms = selectedSymptoms.map((symptom) => symptom.toLowerCase().replace(/ /g, "_"))

      const response = await fetch(`${apiUrl}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: formattedSymptoms }),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()
      setPrediction({
        disease: data.disease || "Unknown Condition",
        confidence: data.confidence || 0,
      })
    } catch (err) {
      console.error("Error predicting disease:", err)
      setError("Failed to analyze symptoms. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Symptom Analysis</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Select the symptoms you're experiencing for an AI-powered health assessment. Our advanced algorithm provides
            personalized insights to help you understand your health.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Card className="border-2">
            <CardHeader>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">Step 1</div>
              <CardTitle>Search and select your symptoms</CardTitle>
              <CardDescription>
                Be as specific as possible for the most accurate results. You can select up to {maxSymptoms} symptoms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingSymptoms ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Type to search symptoms..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {selectedSymptoms.length > 0 && (
                      <div className="absolute inset-y-0 right-3 flex items-center">
                        <Badge variant="outline">
                          {selectedSymptoms.length}/{maxSymptoms}
                        </Badge>
                      </div>
                    )}

                    {searchTerm.length > 0 && (
                      <div className="absolute z-10 mt-1 w-full bg-background border rounded-md shadow-lg">
                        {filteredSymptoms.length === 0 ? (
                          <div className="p-2 text-sm text-muted-foreground">
                            No symptoms found matching your search
                          </div>
                        ) : (
                          <ul className="max-h-60 overflow-auto py-1">
                            {filteredSymptoms.map((symptom) => (
                              <li
                                key={symptom}
                                className="px-3 py-2 text-sm cursor-pointer hover:bg-muted"
                                onClick={() => addSymptom(symptom)}
                              >
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Selected symptoms:</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.length > 0 ? (
                        selectedSymptoms.map((symptom) => (
                          <Badge key={symptom} variant="secondary" className="pl-3 pr-2 py-1.5 flex items-center gap-1">
                            {symptom}
                            <button
                              type="button"
                              onClick={() => removeSymptom(symptom)}
                              className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                            >
                              <X className="h-3 w-3" />
                              <span className="sr-only">Remove {symptom}</span>
                            </button>
                          </Badge>
                        ))
                      ) : (
                        <div className="text-sm text-muted-foreground py-2">No symptoms selected yet</div>
                      )}
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={selectedSymptoms.length === 0 || isLoading}>
                    {isLoading ? "Analyzing..." : "Analyze Symptoms"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {prediction && (
            <Card className="mt-8 border-2 border-primary/20 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-bold">Analysis Results</h2>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Info className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs text-primary mb-1">
                      Potential Condition
                    </div>
                    <h3 className="text-2xl font-bold">{prediction.disease}</h3>
                    <div className="flex items-center mt-2 gap-3">
                      <Progress value={prediction.confidence} className="h-2 flex-1" />
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {prediction.confidence.toFixed(1)}% confidence
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    Based on your reported symptoms:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSymptoms.map((symptom) => (
                      <li key={symptom} className="flex items-start gap-2">
                        <div className="mt-1 rounded-full bg-primary/20 p-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Alert variant="warning" className="mb-6">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Important Health Notice</AlertTitle>
                  <AlertDescription>
                    This is not a medical diagnosis. Please consult with a healthcare professional for proper medical
                    advice and treatment.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-between items-center">
                  <Button variant="ghost" onClick={() => setPrediction(null)}>
                    Check different symptoms
                  </Button>
                  <Button variant="secondary">
                    Next steps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
              How It Works
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Understanding Our Health Analysis Process
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our AI-powered platform provides accurate symptom analysis to help guide your healthcare decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Advanced Algorithm</h3>
                <p className="text-sm text-muted-foreground">
                  Our system uses machine learning algorithms trained on extensive medical datasets to identify patterns
                  between symptoms and conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Regularly Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Our database is continuously refined with the latest medical research and validated by healthcare
                  professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-secondary-foreground flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Private & Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Your health data is protected with robust security measures and is never shared without your explicit
                  consent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Alert variant="warning" className="border-yellow-500">
            <Info className="h-4 w-4" />
            <AlertTitle>Important Health Notice</AlertTitle>
            <AlertDescription>
              MediScan is designed to provide information and is not a substitute for professional medical advice,
              diagnosis, or treatment. Always consult with qualified healthcare providers regarding any medical concerns
              or conditions you may have.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </>
  )
}
