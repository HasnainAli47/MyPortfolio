import * as Command from 'cmdk';
import { useEffect, useState } from 'react';

export default function CommandPalette({ open, onOpenChange }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!open) setValue('');
  }, [open]);

  const run = (fn) => {
    onOpenChange(false);
    setTimeout(fn, 0);
  };

  return (
    <div style={{ display: open ? 'block' : 'none' }} className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={() => onOpenChange(false)} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[90%] max-w-2xl">
        <Command.Command
          label="Global Command Palette"
          value={value}
          onValueChange={setValue}
          className="rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/40 to-transparent shadow-[0_0_18px_rgba(0,167,167,0.35)]"
        >
          <div className="rounded-[11px] border border-white/10 bg-[#0b0b0b]">
            <Command.CommandInput placeholder="Type a command or search..." className="w-full bg-transparent p-4 text-[#EAEAEA] outline-none" />
            <Command.CommandList className="max-h-[50vh] overflow-y-auto">
              <Command.CommandEmpty className="p-4 text-slate-400">No results found.</Command.CommandEmpty>

              <Command.CommandGroup heading="Navigation" className="text-slate-300">
                <Command.CommandItem onSelect={() => run(() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }))}>
                  Go to Home
                </Command.CommandItem>
                <Command.CommandItem onSelect={() => run(() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }))}>
                  Go to Skills
                </Command.CommandItem>
                <Command.CommandItem onSelect={() => run(() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }))}>
                  Go to Projects
                </Command.CommandItem>
              </Command.CommandGroup>

              <Command.CommandGroup heading="Actions" className="text-slate-300">
                <Command.CommandItem onSelect={() => run(() => window.open('/Hasnain Ali AI_ML Engineer Resume.docx.pdf', '_blank'))}>
                  Download CV
                </Command.CommandItem>
                <Command.CommandItem onSelect={() => run(() => { navigator.clipboard?.writeText('codingwithhasnain@gmail.com'); })}>
                  Copy Email Address
                </Command.CommandItem>
              </Command.CommandGroup>

              <Command.CommandGroup heading="External" className="text-slate-300">
                <Command.CommandItem onSelect={() => run(() => window.open('https://github.com/HasnainAli47', '_blank'))}>
                  Open GitHub
                </Command.CommandItem>
                <Command.CommandItem onSelect={() => run(() => window.open('https://linkedin.com/in/hasnainali3', '_blank'))}>
                  Open LinkedIn
                </Command.CommandItem>
              </Command.CommandGroup>

              <Command.CommandGroup heading="Theme" className="text-slate-300">
                <Command.CommandItem onSelect={() => run(() => document.documentElement.classList.toggle('light'))}>
                  Toggle Light/Dark Mode
                </Command.CommandItem>
              </Command.CommandGroup>
            </Command.CommandList>
          </div>
        </Command.Command>
      </div>
    </div>
  );
}


