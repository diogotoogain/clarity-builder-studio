import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100),
  whatsapp: z.string().min(14, 'WhatsApp inválido').max(16),
  capital: z.string().min(1, 'Selecione uma opção'),
  isStudent: z.string().min(1, 'Selecione uma opção'),
  motivation: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

const CIPDApplicationForm = () => {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      capital: '',
      isStudent: '',
      motivation: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast.success(t('cipd.form.success.title'), {
      description: t('cipd.form.success.description'),
    });
  };

  if (isSubmitted) {
    return (
      <section id="aplicar" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-lg mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              {t('cipd.form.success.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('cipd.form.success.description')}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="aplicar" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t('cipd.form.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cipd.form.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('cipd.form.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <p className="text-foreground">{t('cipd.form.step1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <p className="text-foreground">{t('cipd.form.step2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <p className="text-foreground">{t('cipd.form.step3')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <p className="text-foreground">{t('cipd.form.step4')}</p>
                </div>
              </div>
              
              <div className="p-5 rounded-xl bg-card border border-primary/20 shadow-glow">
                <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {t('cipd.form.price')}
                </p>
                <p className="text-muted-foreground text-sm">
                  {t('cipd.form.priceNote')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cipd.form.name')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('cipd.form.namePlaceholder')} 
                            {...field} 
                            className="bg-background border-border/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cipd.form.whatsapp')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(11) 99999-9999"
                            {...field}
                            onChange={(e) => field.onChange(formatPhone(e.target.value))}
                            className="bg-background border-border/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="capital"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cipd.form.capital')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border/50">
                              <SelectValue placeholder={t('cipd.form.capitalPlaceholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="less10k">{t('cipd.form.capital.less10k')}</SelectItem>
                            <SelectItem value="10k-30k">{t('cipd.form.capital.10k30k')}</SelectItem>
                            <SelectItem value="30k-50k">{t('cipd.form.capital.30k50k')}</SelectItem>
                            <SelectItem value="50k-100k">{t('cipd.form.capital.50k100k')}</SelectItem>
                            <SelectItem value="more100k">{t('cipd.form.capital.more100k')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isStudent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cipd.form.isStudent')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border/50">
                              <SelectValue placeholder={t('cipd.form.isStudentPlaceholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fri">{t('cipd.form.student.fri')}</SelectItem>
                            <SelectItem value="100k">{t('cipd.form.student.100k')}</SelectItem>
                            <SelectItem value="both">{t('cipd.form.student.both')}</SelectItem>
                            <SelectItem value="no">{t('cipd.form.student.no')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cipd.form.motivation')} <span className="text-muted-foreground font-normal">({t('cipd.form.optional')})</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('cipd.form.motivationPlaceholder')}
                            {...field}
                            className="bg-background border-border/50 min-h-[100px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {t('cipd.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t('cipd.form.submit')}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground/70 text-center">
                    {t('cipd.form.privacy')}
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CIPDApplicationForm;
