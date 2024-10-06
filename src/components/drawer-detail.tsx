import { DialogTitle } from "@radix-ui/react-dialog"
import { useQuery } from "@tanstack/react-query"
import { DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "./ui/drawer"
import { Button } from "./ui/button"

export function DrawerDetail({ id }: {
  id: number
}) {

  const { data: region, isLoading } = useQuery({
    queryKey: ["region", id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        id,
        name: "Region " + id.toString().slice(0, 5),
        last_update: new Date().toISOString(),
        centralPoint: {
          lat: 51.505,
          lng: -0.09,
        }
      }
    }
  })

  console.log({
    region,
    isLoading
  })

  return (
    <>
      {isLoading && (
        <DialogTitle>
          Loading...
        </DialogTitle>
      )}

      {region && !isLoading && (
        <>
          <DrawerHeader>
            <DrawerTitle>{region.name}</DrawerTitle>
            <DrawerDescription>{region.last_update}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </>

      )}
    </>
  )
}