import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center py-12">
      <Card className="max-w-md mx-auto text-center">
        <CardHeader>
          <div className="mx-auto mb-4 p-4 bg-destructive/10 rounded-full w-fit">
            <div className="text-6xl font-bold text-destructive">404</div>
          </div>
          <CardTitle className="text-2xl font-primary text-foreground">
            Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground font-secondary">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-muted-foreground font-secondary">
            Route: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild className="group">
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </a>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
