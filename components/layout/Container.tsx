import { cn } from '@/lib/utils';

/**
 * Conteneur de page : 1490px max, centré. À 1787px de large on retrouve les
 * 147px de marge de la maquette ; en dessous, gouttières fluides.
 */
export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1490px] px-6 md:px-10', className)}
      {...props}
    >
      {children}
    </div>
  );
}
