import { cn } from '@/lib/utils';

/**
 * Conteneur de page : 93.125rem (1490px à 16px) max, centré. À 1787px de large on
 * retrouve les 147px de marge de la maquette ; au-delà, la racine grandit (globals.css)
 * et le conteneur suit ; en dessous, gouttières fluides.
 */
export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[93.125rem] px-6 md:px-10', className)}
      {...props}
    >
      {children}
    </div>
  );
}
