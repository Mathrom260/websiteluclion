import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

/**
 * Emplacement photo dessiné : surface bleu nuit, hachures fines, légende discrète.
 * À remplacer par une <Image> dès que la vraie photo existe.
 */
export function ImagePlaceholder({ label = 'Photo du chantier', className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — à venir`}
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden bg-ink-soft',
        'bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgb(255_255_255/0.035)_14px_15px)]',
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
      <div className="relative flex flex-col items-center gap-3 text-paper-dim">
        <ImageIcon className="size-7" strokeWidth={1.25} aria-hidden />
        <span className="text-[0.75rem] tracking-[0.2em] uppercase">{label}</span>
      </div>
    </div>
  );
}
