import { DownloadIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@ras-sh/ui/button";

export function PrintButton() {
  return (
    <Button
      className="fixed top-4 right-4 z-10 hidden sm:block print:hidden"
      onClick={() => window.print()}
      size="sm"
      variant="outline"
    >
      <span className="flex items-center gap-2">
        <DownloadIcon className="h-4 w-4" />
        Download PDF
      </span>
    </Button>
  );
}
